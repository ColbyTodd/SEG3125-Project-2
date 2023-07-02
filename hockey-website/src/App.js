import Compare from './Compare';
import Home from './Home';
import Navbar from './Navbar';
import Player from './Player';
import Search from './Search'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/player/:name">
                <Player />
              </Route>
              <Route path="/compare/:names">
                <Compare />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
