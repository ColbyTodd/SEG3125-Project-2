import Compare from './Compare';
import Home from './Home';
import Navbar from './Navbar';
import Player from './Player';
import Search from './Search'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path={`/`} render={ (routerProps) => < Home routerProps={routerProps} />} />
              <Route path={`/search/:compare`} render={ (routerProps) => < Search routerProps={routerProps} />} />
              <Route path={`/search`} render={ (routerProps) => < Search routerProps={routerProps} />} />
              <Route path={`/player/:name`} render={ (routerProps) => < Player routerProps={routerProps} />} />
              <Route path={`/compare/:names`} render={ (routerProps) => < Compare routerProps={routerProps} />} />
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;