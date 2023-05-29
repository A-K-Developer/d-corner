import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar , Footer, ScrollToTop} from "./components/index";
import {HomePage, Work, Service, AboutUs, Contact, Project} from './Pages/indexPages'
import './components/style.css';


function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<HomePage /> } />
          <Route path="/Work" element={<Work />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project/:id" element={<Project url='google.com' />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
