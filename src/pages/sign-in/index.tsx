import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from '@react-oauth/google';
import SocialLoginButton from 'components/atoms/SocialLoginButton';
import { NextPage } from 'next';
import styles from 'styles/sign-in.module.scss';
import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import { useGoogleLogin } from '@react-oauth/google';
import { authWithFacebook, authWithGoogle } from 'services/api-client/auth.service';

const SignInPage: NextPage = () => {
  const responseFacebook = async ({ userID, accessToken }: any) => {
    try {
      const result = await authWithFacebook({ userID, accessToken });
      console.log('🚀 ~ file: index.tsx:19 ~ onSuccess: ~ result:', result);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:25 ~ handleLoginWithGoogle ~ error:', error);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => handleLoginWithGoogle(tokenResponse.access_token),
  });

  const handleLoginWithGoogle = async (googleAccessToken: string) => {
    try {
      const result = await authWithGoogle({ accessToken: googleAccessToken });
      console.log('🚀 ~ file: index.tsx:19 ~ onSuccess: ~ result:', result);
    } catch (error) {
      console.log('🚀 ~ file: index.tsx:25 ~ handleLoginWithGoogle ~ error:', error);
    }
  };

  return (
    <div className={styles['sign-in']}>
      <div className="container shadow-lg rounded-[40px] flex justify-center">
        <div className="w-3/4 text-center">
          <h2 className="text-5xl font-semibold mb-4">Sign In</h2>
          <p>Welcome to our blog magazine Community</p>

          <div className="flex flex-col items-center gap-6 mt-24">
            <FacebookLogin
              appId={'752362496435225'}
              callback={responseFacebook}
              render={(renderProps) => (
                <SocialLoginButton
                  icon={<FacebookFilled className="text-[#3c5997] text-lg" />}
                  socialName="Facebook"
                  onClick={renderProps.onClick}
                />
              )}
            />

            <SocialLoginButton
              icon={<GoogleCircleFilled className="text-[#ea4336] text-lg" />}
              socialName="Google"
              onClick={loginWithGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
