import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { stripe } from '@stripe/stripe-js';
import {stripePromise} from './utils/stripe/stripe.utils'
import reportWebVitals from './reportWebVitals';
// import { UserProvider } from './contexts/user.contexts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, persistor } from './store/store';
// import { CategoriesProvider } from './contexts/categories.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store} >
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          <Elements stripe={stripePromise}>
             <App />
          </Elements>
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
