import { Navbar } from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Developer from "./components/Developer";
import { Body } from "./components/Body";
import Welcome from "./components/Welcome";
import Contact from "./components/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Welcome />{" "}
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Navbar />
          <div>
            {/* <h1 className="text-center my-5 text-4xl font-semibold">
              Disease Detection
            </h1> */}
          </div>
          <Body />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          {" "}
          <Navbar /> <About />{" "}
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          {" "}
          <Navbar /> <Contact />{" "}
        </>
      ),
    },
    {
      path: "/developer",
      element: (
        <>
          {" "}
          <Navbar /> <Developer />{" "}
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
