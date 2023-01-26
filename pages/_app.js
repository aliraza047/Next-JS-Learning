import { Provider } from 'next-auth/client'
import Navbar from '../component/Navbar/index'
import '../styles/globals.css'
import '../component/Navbar/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp