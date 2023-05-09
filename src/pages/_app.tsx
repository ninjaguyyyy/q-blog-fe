import type { AppProps } from 'next/app';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from '../components/layout';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="896823827724-rh059rq014s9svot2r2p7d140nbqp0ca.apps.googleusercontent.com">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleOAuthProvider>
  );
}
export default MyApp;
