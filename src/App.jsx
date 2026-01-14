import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BuilderProvider } from "./context/BuilderContext";
import Landing from "./pages/Landing";
import Builder from "./pages/Builder";

export default function App() {
  return (
    <BuilderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </BrowserRouter>
    </BuilderProvider>
  );
}
