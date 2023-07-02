import Home from './Home';
import Navbar from './Navbar';
import Search from './Search'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
