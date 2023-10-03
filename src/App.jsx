// ? rrd import
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// ? Layout
import MainLayout from "./layout/MainLayout";

// ? Pages
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const routes = createBrowserRouter([{
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "About",
        element: <About/>
      },
      {
        path: "Contact",
        element: <Contact/>
      }
    ]
  }])
  return <RouterProvider router={routes}/>
}

export default App;
