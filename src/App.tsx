import { lazy, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Fallback from "./Fallback";

const Home = lazy(() => import("./Home"));
const Experience = lazy(() => import("./Experience"));
const Project = lazy(() => import("./Project"));
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
