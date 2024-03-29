import { Inter } from "next/font/google";

import "@/styles/global.css";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const interFont = Inter({ subsets: ["latin"], variable: "--font-inter", preload: true, display: "swap" });

const getInitialProps = async () => {
  const locale = 'en'
  return {
    locale,
    dir: 'ltr'
  }
}

const getFallbackProps = () => {
  return {
    locale: 'en',
    dir: 'ltr',
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isSSG = false;
  const { locale, dir } = isSSG
    ? getFallbackProps()
    : await getInitialProps();

  return (
    <html
      lang={locale}
      dir={dir}
    >
      <head>
        <style>{`
          :root {
            --font-inter: ${interFont.style.fontFamily.replace(/\'/g, "")};
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
