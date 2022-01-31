import './App.css';
import { Main } from './Main/Main';
import { Login } from './components/Registration';
import{ BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/registration" component={Login}/>
          <Main/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
