import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {
  Home,
  About,
  Services,
  Location,
  Financing,
  Faqs,
  Contact,
  Appointment,
} from "./components/pages/";
import Header from "./components/layout/Header";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/location", element: <Location /> },
  { path: "/financing", element: <Financing /> },
  { path: "/faqs", element: <Faqs /> },
  { path: "/contact", element: <Contact /> },
  { path: "/appointment", element: <Appointment /> },
]);

function App() {
  return (
    <div className="App">
      <Header />
    <RouterProvider router={router}>
    
    </RouterProvider>
    </div>
  );
}

export default App;
