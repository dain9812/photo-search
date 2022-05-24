import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
import Search from "./pages/Search";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="search/:query" element={<Search />} />
        <Route path="photo/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
