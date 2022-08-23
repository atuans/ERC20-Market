import '../styles/globals.css'
import {MoralisProvider} from 'react-moralis';
import {MarketProvider} from '../context/MarketContext';
import {ModalProvider} from 'react-simple-hook-modal';
import {NotificationProvider} from 'web3uikit'
function MyApp({ Component, pageProps }) {

  return( 
  <MoralisProvider  appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
    <NotificationProvider>    
    <MarketProvider>
      <ModalProvider>

         <Component {...pageProps} />
      </ModalProvider>

    </MarketProvider>
  </NotificationProvider>
  </MoralisProvider>

  )
}

export default MyApp
