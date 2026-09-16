import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portal from './pages/Portal';
import Workhub from './pages/Workhub';
import Realty from './pages/Realty';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/workhub" element={<Workhub />} />
        <Route path="/realty" element={<Realty />} />
      </Routes>
    </BrowserRouter>
  );
}