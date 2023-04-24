import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultPage from "./components/DefaultPage";
import Home from "./Pages/Home";
import PostContent from "./components/Post/PostContent";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="post/:slug" element={<PostContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
