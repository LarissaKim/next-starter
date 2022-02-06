import type { AppProps } from 'next/app';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

import '../design/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Component {...pageProps} />
      <Toaster
        position='bottom-center'
        reverseOrder={false}
        toastOptions={{
          style: {
            maxWidth: 500,
          },
        }}
      />
    </ThemeProvider>
  );
}

export default MyApp;
