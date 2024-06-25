import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="skills" />
            <Route path="project" />
            <Route path="about" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
