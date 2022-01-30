import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Weather search app</h1>
      </header>
      <Weather defaultCity="Paris" />

      <footer>
        <small>
          Open-source by
          <a
            href="https://github.com/ArchiGen/Final-weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            ArchiGen
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
