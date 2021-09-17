import '../styles/globals.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script data-ad-client="ca-pub-6296135641992804" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    <Header />
    <main className='container'>
    <Component {...pageProps} />
    </main>
    </>
  )
}

export default MyApp
