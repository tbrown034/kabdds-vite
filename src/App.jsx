import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { Home, About, Services, Location, Financing, Faqs, Contact, Appointment  } from "./components/pages/"




function App() {
  return (
    <div className="App">
      <h1>Hello World</h1> 
      <button>Click me</button>
      <i className="fab fa-github-square"></i>

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
