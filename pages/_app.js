import '../styles/globals.css'
import Script from 'next/script'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script data-ad-client="ca-pub-6296135641992804" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>

    </>
  )
}

export default MyApp
