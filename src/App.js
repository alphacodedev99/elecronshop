import { Outlet } from "react-router-dom";

// components
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="">
      <NavbarComponent />
      <Outlet />
    </div>
  );
}

export default App;
