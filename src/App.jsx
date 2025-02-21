import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./components/Main";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";

function App() {
  return (
    <div className="container-fluid">
      <MyNav />
      <div className="row">
        <Main />
      </div>
      <MyFooter />
    </div>
  );
}

export default App;
