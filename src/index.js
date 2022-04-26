import { render } from 'react-dom';
import { DarkModeProvider } from 'src/context';

import App from 'src/components/App';

const rootReactElement = (
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);

const target = document.getElementById('root');

render(rootReactElement, target);
