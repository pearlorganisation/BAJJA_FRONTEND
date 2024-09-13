import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div className="bg-white">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
