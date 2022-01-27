import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
        <small>
          Open-source by
          <a
            href="https://github.com/ArchiGen/weather-app-she-codes"
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
