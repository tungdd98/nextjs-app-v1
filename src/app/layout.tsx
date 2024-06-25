import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { theme } from '@/theme';
import { CssBaseline } from '@mui/material';
import { Provider } from '@/trpc/Provider';

export const metadata: Metadata = {
  title: 'Test: Seoul Comix',
  description: 'Coding Test Assignment: Full Stack Developer Challenge',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <AppRouterCacheProvider>
            <CssVarsProvider theme={theme}>
              <CssBaseline />
              <div className="mb-16">{children}</div>
            </CssVarsProvider>
          </AppRouterCacheProvider>
        </Provider>
      </body>
    </html>
  );
}
