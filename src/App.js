import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';
import { Navbar, Footer, ScrollToTop } from "./components/index";
import { HomePage, Work, Service, AboutUs, Contact, Project } from './Pages/indexPages'
import './components/style.css';

// Account details for One.com 
//username : lavi0200@edu.zealand.dk
// password : designdevelopmentcorner



/*


Things to change before Hand in 

    1---Social Icons in Footer 
    2---Social Icons /Contact Page 
    3--validate code
    4-Build folder 
    5- fix servivr page 
    */

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <ScrollToTop />
          <Routes>
            <Route exact path='/' element={<HomePage />} />
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
