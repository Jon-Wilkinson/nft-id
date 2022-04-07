import '../styles/main.scss';

import ReactDOM from 'react-dom';
import MainPage from './react/MainPage';
import PrintPage from './react/PrintPage';
import Login from './react/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="printPage" element={<PrintPage/>} />
        <Route path="*" element={<Login/>} />
        <Route path="mainPage" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
    , document.getElementById('app'));
});
