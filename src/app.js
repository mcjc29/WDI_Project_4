import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';
import 'bootstrap-css-only';
import 'react-select/dist/react-select.css';
import NavMain from './components/utility/NavMain';
import Routes from './components/utility/Routes';
import SearchBar from './components/utility/SearchBar';

import NonprofitsIndex from './components/nonprofits/NonprofitsIndex';
import UsersIndex from './components/users/UsersIndex';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <NavMain />
          </header>
          <div className="container">
            {/* <SearchBar NonprofitsIndex={NonprofitsIndex} UsersIndex={UsersIndex}/> */}
            <main>

              <section className="jumbotron text-center">
                <div className="container">
                  <h1 className="jumbotron-heading">GAT SKILLZ?</h1>
                  <p className="lead text-muted">GAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZ</p>
                  <p>
                    <a href="#" className="btn btn-primary">Search by opportunity </a>
                    <a href="#" className="btn btn-secondary">Search by volunteer</a>
                  </p>
                </div>
              </section>
              <Routes />
            </main>
            <footer className="text-muted">
              <div className="container">
                <p className="float-right">
                  <a href="#">Back to top</a>
                </p>
                <p>GAT SKILLZ? &copy; SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZGAT SKILLZ!</p>
                <p>Skillz? <a href="/">Visit the homepage</a></p>
              </div>
            </footer>
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
