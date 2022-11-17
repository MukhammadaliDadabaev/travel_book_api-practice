import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCreate from "./pages/AddCreate";
import EditUpdate from "./pages/EditUpdate";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/add" element={<AddCreate />} />
              <Route path="/update/:id" element={<EditUpdate />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
