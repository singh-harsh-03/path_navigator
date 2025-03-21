import { Suspense, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/App.css";
import Map from "./pages/Map";
import { AdminContextType } from "./utils/types";
import { Analytics } from "@vercel/analytics/react";
import SvgPage from "./components/SvgPage";
export const AdminContext = createContext<AdminContextType | null>(null);
function App() {
  return (
    <Suspense >
      <div className="flex flex-col relative w-full max-h-[100dvh]">
        <Routes>
          <Route path="/:postion?" element={<Map />} />
          <Route path="/svg" element={<SvgPage />} />
        </Routes>
        <ToastContainer position="bottom-left" closeOnClick autoClose={2500} />
        <Analytics />
      </div>
    </Suspense>
  );
}

export default App;
