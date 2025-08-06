import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';  // Adjust path if needed
import Landing_Page from './Components/Landing_Page/Landing_Page';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;