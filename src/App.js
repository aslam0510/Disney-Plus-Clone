import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
