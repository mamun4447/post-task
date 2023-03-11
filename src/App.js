import { RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import { router } from "./routes";

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
