import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/Pricing";
import Contact from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
