import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import RootElement from "./components/RootElement";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkHistory from "./components/WorkHistory";
import Blog from "./components/Blog";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootElement />}>
          <Route index element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/work-history" element={<WorkHistory />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
