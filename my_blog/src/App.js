import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCreate from "./pages/AddCreate";
import EditUpdate from "./pages/EditUpdate";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fuild">
        <Navbar />
        <div className="row">
          <SidebarLeft />
          <div className="col-8">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/add" element={<AddCreate />} />
              <Route path="/update/:id" element={<EditUpdate />} />
            </Routes>
          </div>
          <SidebarRight />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
