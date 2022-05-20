import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="photo" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
