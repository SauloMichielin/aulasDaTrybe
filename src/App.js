import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={ Login }
        />
        <Route
          path="/home"
          component={ Home }
        />
        <Route path="*" component={ PageNotFound } exact />
      </Switch>
    </>
  );
}

export default App;
