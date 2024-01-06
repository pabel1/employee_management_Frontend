import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { GridLoader } from "react-spinners";
import "./App.css";

import useAuthCheck from "./hooks/useAuthCheck";
import { routes } from "./routes/Routes";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div className="w-screen h-screen grid place-items-center">
      <GridLoader color="#7E7FFF" size={20} />
    </div>
  ) : (
    <>
      <RouterProvider router={routes}></RouterProvider>

      <Toaster position="top-center" />
    </>
  );
}

export default App;
