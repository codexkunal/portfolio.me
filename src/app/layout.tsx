import type { Metadata } from "next";
import {Nunito_Sans} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const nunito = Nunito_Sans({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Sengar kunal singh',
  description: 'I build products that solve real problems. Available for new opportunities.',
  openGraph: {
    title: 'Sengar Kunal Singh | Full-Stack Developer | Software engineer',
    description: 'I build products that solve real problems. Available for new opportunities.',
    url: 'https://kartik017.vercel.app/',
    siteName: 'Sengar kunal singh Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sengar kunal singh | Full-Stack Developer | Software engineer',
    description: 'I build products that solve real problems. Available for new opportunities.',
    creator: '@code_kartik',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={nunito.className}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
      <script
          src="https://script.refix.ai/script.min.js"
          type="text/javascript"
          data-refix-token="c9a48825-4062-464a-941d-c958ddf21a96"
          defer
      ></script>
    </html>
  );
}
