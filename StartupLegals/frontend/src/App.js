import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <header className="App-header">
      <h2 id='login'><Link to='/login'>Log in</Link></h2>
        <h1>
          Startup Legals
        </h1>
        <Link to='/home'>Home</Link>

        <Link className="App-link" to='/create_contract'>
          Create contract 
        </Link>
      </header>
    </div>
  );
}

export default App;
