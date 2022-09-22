import * as React from 'react';
// import './index.css';
import GlobalStyles from './styles/global'
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <HashRouter>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </HashRouter>
);
