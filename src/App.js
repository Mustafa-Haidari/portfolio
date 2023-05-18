import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import RootElement from "./components/RootElement";
import Skills from "./components/Skills";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkHistory from "./components/WorkHistory";
import Blog from "./components/Blog";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/portfolio", element: <Home /> },
      { path: "/about-me", element: <About /> },
      { path: "/work-history", element: <WorkHistory /> },
      { path: "/projects", element: <Projects /> },
      { path: "/skills", element: <Skills /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
