import star from './blue-star-small.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={star} className="App-logo" alt="logo" />
        <p>
          Second App deployed w/Netlify.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
