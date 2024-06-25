import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="skills" element={<Skills />} />
            <Route path="projects" />
            <Route path="about" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
