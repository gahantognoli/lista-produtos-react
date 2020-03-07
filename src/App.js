import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import NewProductView from './views/NewProductView'
import ProductListView from './views/ProductListView';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <header>
            <ul className="link-list">
              <li>
                <Link to={'/'}>Novo</Link>
              </li>
              <li>
                <Link to={'/list'}>Lista</Link>
              </li>
            </ul>
          </header>
        </div>
        <div>
          <Route path={'/'} exact component={NewProductView}></Route>
          <Route path={'/list'} component={ProductListView}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
