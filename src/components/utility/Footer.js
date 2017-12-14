import React from 'react';


const Footer = () => {
  return(
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>&copy; <span className="logo">Charity<span>Able</span></span></p>
        <hr />
        <p>Skillz? <a href="/">Visit the homepage</a></p>
      </div>
    </footer>
  );
};

export default Footer;
