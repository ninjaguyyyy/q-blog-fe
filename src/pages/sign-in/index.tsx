import { FacebookFilled, GoogleCircleFilled } from '@ant-design/icons';
import SocialLoginButton from 'components/atoms/SocialLoginButton';
import { NextPage } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from 'styles/sign-in.module.scss';

const SignInPage: NextPage = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'authenticated') {
    router.push('/');
    return null;
  }

  const signInFacebook = async () => {
    await signIn('facebook', { callbackUrl: '/' });
  };

  const signInGoogle = async () => {
    await signIn('google', { callbackUrl: '/' });
  };

  return (
    <div className={styles['sign-in']}>
      <div className="container shadow-lg rounded-[40px] flex justify-center">
        <div className="w-3/4 text-center">
          <h2 className="text-5xl font-semibold mb-4">Sign In</h2>
          <p>Welcome to our blog magazine Community</p>

          <div className="flex flex-col items-center gap-6 mt-24">
            <SocialLoginButton
              icon={<FacebookFilled className="text-[#3c5997] text-lg" />}
              socialName="Facebook"
              onClick={signInFacebook}
            />

            <SocialLoginButton
              icon={<GoogleCircleFilled className="text-[#ea4336] text-lg" />}
              socialName="Google"
              onClick={signInGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
