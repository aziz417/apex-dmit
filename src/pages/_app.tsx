// pages/_app.tsx
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../../app/redux/store';
import ProviderThm from '@/components/ProviderThm';
import Navbar from '@/components/Navbar';
import "../styles/globals.css";
import Footer from '@/components/Footer';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ProviderThm>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <Navbar />
          <Component {...pageProps} />
          <Footer />
          
        </PersistGate>
      </Provider>
    </ProviderThm>
  );
};

export default MyApp;
