import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis';
import {MarketProvider} from '../context/MarketContext';
import {ModalProvider} from 'react-simple-hook-modal';

function MyApp({ Component, pageProps }) {

  return( 
  <MoralisProvider  appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>

    <MarketProvider>
      <ModalProvider>

         <Component {...pageProps} />
      </ModalProvider>

    </MarketProvider>
  
  </MoralisProvider>

  )
}

export default MyApp
