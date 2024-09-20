import "./App.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  return (
    <div className="bg-white">
      <RouterProvider router={routes} />
      
    </div>
  );
}

export default App;
