import "./App.css";
import { Home, About, Services, Location, Financing, Faqs, Contact, Appointment  } from "./components/pages/"


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1> 
      <button>Click me</button>
      <Home />
      <About />
      <Services />
      <Location />
      <Financing />
      <Faqs />
      <Contact />
      <Appointment />
      <div>
        <li></li>
      </div>
    </div>
  );
}

export default App;
