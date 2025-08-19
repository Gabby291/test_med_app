import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';  // Adjust path if needed
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';






function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <Notification/>
      <Routes>
      <Route path="/" element={<Landing_Page />} />
      <Route path="/signup" element={<Sign_Up />} />
      <Route path="/login" element={<Login />} />
      <Route path="/instant-consultation" element={<InstantConsultation />} />
      <Route path="/booking-consultation" element={<BookingConsultation />} />  
      
      
    {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;