import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AirCover from "./Components/AirCover";
import AirCoverHost from "./Components/AirCoverHost";
import Discrimination from "./Components/Discrimination";
import Cancellation from "./Components/Cancellation";
import Career from "./Components/Career";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import Privacy from "./Components/Privacy";
import Terms from "./Components/Terms";
function App(){
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
        <Route path="/AirCover" element={<AirCover />} />
        <Route path="/AirCoverhost" element={<AirCoverHost/>}/>
        <Route path="/Cancellation" element={<Cancellation/>}/>
        <Route path="/Career" element={<Career/>}/>
        <Route path="/Discrimination" element={<Discrimination/>}/>
        <Route path="/FAQ" element={<FAQ/>}/>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        </Routes>
          <Footer/>
         
    </BrowserRouter>
       
    );
};
export default App;

