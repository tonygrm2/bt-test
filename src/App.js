import './App.css';
import btLogo from './assets/bt-logo.png';
import { NewsApp } from './NewsApp/Container/NewsApp';

function App() {
  return (
    <div className="app">
      <header>
        <h1>BT Test Antonino Grimaldi</h1>
      </header>
      <img src={btLogo} alt="bt-logo" className="bt-logo"/>
      <NewsApp />
    </div>
  );
}

export default App;
