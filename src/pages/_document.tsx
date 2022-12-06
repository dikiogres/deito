import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { AuthProvider } from '@/auth/provider/AuthProvider';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <AuthProvider>
        <Html lang='en'>
          <Head>
            <link
              rel='preload'
              href='/fonts/inter-var-latin.woff2'
              as='font'
              type='font/woff2'
              crossOrigin='anonymous'
            />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </AuthProvider>
    );
  }
}

export default MyDocument;
