// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
function App(){
    return (
        <div>
            <Navbar/>
          <Footer/>
        </div>
    );
};
export default App;

/*
function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alllocation" element={<alllocation />} />
          <Route path="/rural" element={<rural />} />
          <Route path="/urban" element={<urban />} />
          <Route
            path="/admin"
            element={
              <AuthRoute>
                <AdminPage />
              </AuthRoute>
            }
          />
          {/* 404 }
          
          <Route
            path="*"
            element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
          />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
*/