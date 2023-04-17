import "./App.css";
import 'semantic-ui-css/semantic.min.css';
import { Home, About, Services, Location, Financing, Faqs, Contact, Appointment  } from "./components/pages/"




function App() {
  return (
    <div className="App">
      <div className="hello-world">
      <h1>Hello World</h1> 
      <button>Click me</button>
      <i className="fa-sharp fa-solid fa-globe fa-8x"></i>
      </div>
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
