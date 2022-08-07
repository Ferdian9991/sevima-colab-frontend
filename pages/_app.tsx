import "../styles/tailwind.css";
import "../public/fontawesome/css/all.min.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import App from "../components/App";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App>
          <Component {...pageProps} />
        </App>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
