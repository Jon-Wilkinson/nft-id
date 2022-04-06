import MainPage from './react/MainPage';
import ExPage from './react/ExPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="expage" element={<ExPage/>} />
      </Routes>
    </BrowserRouter>
  );
}