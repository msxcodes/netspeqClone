import { Outlet } from "react-router-dom";
import Footer from "./components/Header/Footer";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
