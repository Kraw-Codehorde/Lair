import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import HomePage from "../../../pages/HomePage";
import About from "../../../pages/About";
import Services from "../../../pages/Services";
import Experience from "../../../pages/Experience";
import Projects from "../../../pages/Projects";
import Contact from "../../../pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      
      <Route
        path="/"
        element={
          <>
         <Sidebar />
          <div id="colorlib-main">
          <HomePage />
          </div>
          </>
        }
      />
      <Route
      path="/about"
      element={
<>
         <Sidebar />
          <div id="colorlib-main">
          <About />
          </div>
          </>
      }
      />
    </Route>
  )
);

const MainContent = () => {
  return (
    <>
    <div id="colorlib-main">
    <HomePage />
    <About />
    <Services />
    <Experience />
    <Projects />
    <Contact />
    </div>
    </>
  )
  
};

export default MainContent;
