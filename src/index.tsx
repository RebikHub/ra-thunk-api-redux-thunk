import * as React from 'react';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
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

(async () => {
  try {
    if (navigator.serviceWorker) {
      await navigator.serviceWorker.register('./service-worker.js');
      console.log('sw registered');
    }
  } catch (e) {
    console.log(e);
  }
})();

// "homepage": "https://rebikhub.github.io/ra-thunk-api-redux-thunk/",
