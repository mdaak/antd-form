import './App.css';
import Login from './components/Login.js';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Login/>
       <SignUp/>
      </header>
    </div>
  );
}

export default App;
