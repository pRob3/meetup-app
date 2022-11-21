import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>
);
