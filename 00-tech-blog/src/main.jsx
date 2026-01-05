import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import './index.css'
import config from './config';
import routes from './router/routes.js';
import store from './store/storeContext.js';


console.log(`Tech Blog using appwrite with URL: ${config.appwriteUrl}`);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  </StrictMode>,
);
