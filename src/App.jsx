// App.jsx - Main component with routing
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StitchesApp } from './StitchesApp';
import { TailwindApp } from './TailwindApp';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-gray-100">
        <Link to="/stitches" className="mr-4">Stitches Version</Link>
        <Link to="/tailwind">Tailwind Version</Link>
      </nav>
      <Routes>
        <Route path="/stitches" element={<StitchesApp />} />
        <Route path="/tailwind" element={<TailwindApp />} />
      </Routes>
    </BrowserRouter>
  );
}