import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Components/Login'
import './App.css';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
