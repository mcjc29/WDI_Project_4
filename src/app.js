import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';
import 'bootstrap-css-only';
import 'react-select/dist/react-select.css';
import NavMain from './components/utility/NavMain';
import Routes from './components/utility/Routes';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <NavMain />
          </header>
          <div className="container">
            <h1><Link to="/">Home</Link></h1>
            <main>
              <Routes />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
