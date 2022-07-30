import NextHead from "next/head";
import { AppProps } from "next/app";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import { GlobalStyles } from "~/styles/GlobalStyles";

import "~/styles/fonts.css";
import { ContextProvider } from "~/contexts/context";

const defaultSeo: DefaultSeoProps = {
  title: "wild-next",
  titleTemplate: "%s | wild-next",
  description: "This is the wild-next boilerplate.",
  twitter: {
    cardType: "summary_large_image",
  },
  openGraph: {
    type: "website",
    images: [{ url: "/social-embed.png" }],
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...defaultSeo} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" key="viewport" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" crossOrigin="use-credentials" />
        <link rel="preload" href="/fonts/Inter-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
      </NextHead>
      <GlobalStyles />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
};

export default App;
