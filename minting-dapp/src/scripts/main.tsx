import '../styles/main.scss';

import ReactDOM from 'react-dom';
import MainPage from './react/MainPage';
import ExPage from './react/ExPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="expage" element={<ExPage/>} />
      </Routes>
    </BrowserRouter>
    , document.getElementById('app'));
});
