import logo from './trybe-logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <header>
        <img src={ logo } alt="logo trybe" />
      </header>
      
      <main className="app">
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
