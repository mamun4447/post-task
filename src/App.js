import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <div className="bg-slate-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
