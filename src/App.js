import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/HomePage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path='/parameter/:id/:name' element={<Parameter />} />
          <Route path='/search' element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
//hồ ngô hoang việt dsadsa