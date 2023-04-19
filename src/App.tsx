import "./styles/global.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import PostContent from "./components/Post/PostContent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostContent />} />
      </Routes>
    </BrowserRouter>
  );
}
