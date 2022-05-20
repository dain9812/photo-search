import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Photo from "./pages/Photo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="photo" element={<Photo />}>
          <Route path=":id" element={<Photo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
