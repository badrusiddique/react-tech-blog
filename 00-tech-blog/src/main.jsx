import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import config from './config';
import store from './store/storeContext.js';
import { Provider } from 'react-redux';


console.log(`Tech Blog using appwrite with URL: ${config.appwriteUrl}`);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
