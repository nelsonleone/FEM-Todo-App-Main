import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/styles.css';
import { Provider as ReduxProvider } from 'react-redux';
import AppStore from './features/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={AppStore}>
      <App />
    </ReduxProvider>
  </React.StrictMode>,
)
