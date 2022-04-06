import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import App from './App';

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<App/>, document.getElementById('app'));
  ReactDOM.render(<Dapp />, document.getElementById('minting-dapp'));
});
