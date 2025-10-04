import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Notifications } from "@mantine/notifications";



export const metadata: Metadata = {
  title: 'Jobs Admin',
  description: 'Job listings',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider defaultColorScheme="light">
          {children}
          <Notifications position="bottom-center" />
        </MantineProvider>
      </body>
    </html>
  );
}
