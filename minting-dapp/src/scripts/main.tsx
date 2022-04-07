import '../styles/main.scss';

import ReactDOM from 'react-dom';
import MainPage from './react/MainPage';
import PrintPage from './react/PrintPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="printPage" element={<PrintPage/>} />
        <Route path="*" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
    , document.getElementById('app'));
});
