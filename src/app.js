import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'font-awesome/css/font-awesome.css';
import './scss/style.scss';
import 'bootstrap-css-only';
import 'react-select/dist/react-select.css';
import NavMain from './components/utility/NavMain';
import Routes from './components/utility/Routes';
// import SearchBar from './components/utility/SearchBar';
import Jumbotron from './components/utility/Jumbotron';
// import SearchBar from './components/utility/SearchBar';
import Footer from './components/utility/Footer';
// import NonprofitsIndex from './components/nonprofits/NonprofitsIndex';
// import UsersIndex from './components/users/UsersIndex';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <NavMain />
          </header>
          <main>
            <Jumbotron />
            <Routes />
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
