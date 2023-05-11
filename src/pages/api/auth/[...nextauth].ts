import { serverConfig } from 'configs/server-config';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { authWithFacebook, authWithGoogle } from 'services/api-client/auth.service';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: serverConfig.providers.google.clientId as string,
      clientSecret: serverConfig.providers.google.clientSecret as string,
    }),

    FacebookProvider({
      clientId: serverConfig.providers.facebook.clientId as string,
      clientSecret: serverConfig.providers.facebook.clientSecret as string,
    }),
  ],

  callbacks: {
    async signIn({ user, account }: any) {
      const { provider, access_token, providerAccountId } = account;
      let accessToken = null;
      let userId = null;
      let role = null;

      if (provider === 'facebook') {
        const results: any = await authWithFacebook({ userID: providerAccountId, accessToken: access_token });
        accessToken = results.accessToken;
        userId = results.user._id;
        role = results.user.role;
      }

      if (provider === 'google') {
        const results: any = await authWithGoogle({ accessToken: access_token });
        accessToken = results.accessToken;
        userId = results.user._id;
        role = results.user.role;
      }

      user.accessToken = accessToken;
      user.id = userId;
      user.role = role;

      return true;
    },

    async jwt({ token, user }: any) {
      if (user) {
        token.accessToken = user.accessToken;
        token.user = {};
        token.user.id = user.id;
        token.user.avatar = user?.image;
        token.user.role = user?.role;
        token.user.email = user?.email;
        token.user.name = user?.name;
      }

      return token;
    },

    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.user = token.user;
      return session;
    },
  },
};
export default NextAuth(authOptions);
