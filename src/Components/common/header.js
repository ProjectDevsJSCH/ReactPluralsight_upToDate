var React = require('react');
var ReactRouter = require('react-router-dom');
var Link = ReactRouter.Link;

class Header extends React.Component {
   render(){
      return (
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <a href="/" className="navbar-brand">
                  <img width="150px" height="30px" src="images/pluralsight-logo.png" />
               </a>
               <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/authors">Authors</Link></li>
                  <li><Link to="/about">About</Link></li>
               </ul>
            </div>
         </nav>
      );
   }
}

module.exports = Header;