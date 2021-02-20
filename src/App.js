import logo from './sodium_design_logo_1_horiz.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="Sodium-Design-App-logo" alt="Sodium Design Logo" />
        <p>
          A design company not a mass production company.
        </p>
        <a
          className="App-link"
          href="https://www.gingerman.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go and see gingerman.co.uk 
        </a>
      </header>
    </div>
  );
}

export default App;
