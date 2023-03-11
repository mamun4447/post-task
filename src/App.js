import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
