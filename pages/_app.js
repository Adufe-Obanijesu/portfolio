import Head from "next/head";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Obanijesu Adufe</title>
        <meta name="description" content="Obanijesu Adufe is a software engineer who builds stunning and aesthetic websites to help businesses large or small boost their brand awareness, increase their customer base and drive profit" />
        <meta name="image" content="https://obanijesuadufe.com/og.png" />
        <meta property="og:title" content="Obanijesu Adufe" />
        <meta property="og:description" content="Building stunning and aesthetic websites to help businesses large or small boost their brand awareness, increase their customer base and drive profit" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Obanijesu Adufe" />
        <meta property="og:url" content="https://obanijesuadufe.com" />
        <meta property="og:image" content="https://obanijesuadufe.com/og.png" />
        <meta property="twitter:title" content="Obanijesu Adufe" />
        <meta property="twitter:description" content="Building stunning and aesthetic websites to help businesses large or small boost their brand awareness, increase their customer base and drive profit" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@AdufeObanijesu" />
        <meta property="twitter:site" content="@AdufeObanijesu" />
        <meta property="twitter:url" content="https://obanijesuadufe.com" />
        <meta property="twitter:image" content="https://obanijesuadufe.com/og.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
  
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
