import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Reflection from './pages/reflection';
import VideoPresentation from './pages/presentaion';
import Poster from './pages/poster';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/presentation" element={<VideoPresentation />} />
        <Route path="/poster" element={<Poster />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
