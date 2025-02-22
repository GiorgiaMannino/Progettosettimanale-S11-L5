import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import YourLibrary from "./components/YourLibrary";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <MyNav />
        <div className="row">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/yourlibrary" element={<YourLibrary />} />
          </Routes>
        </div>
      </div>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
