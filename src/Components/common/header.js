var React = require('react');
var ReactRouter = require('react-router-dom');
var Redirect = require('react-router-dom').Redirect;
var Prompt = require('react-router-dom').Prompt;
var Link = ReactRouter.Link;

class Header extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         flagConfirmation: false
      };

      this.updateState = this.updateState.bind(this);
   }

   updateState(e) {
      e.preventDefault();
      this.setState({
         flagConfirmation: true
      }, () => {console.log("Redirigido"); return <Redirect to="about"/> ;});
   }

   render() {

      return (
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <a href="/" className="navbar-brand">
                  <img width="150px" height="30px" src="images/pluralsight-logo.png" />
               </a>
               <ul className="nav navbar-nav">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="authors">Authors</Link></li>
                  <li><Link to="about" onClick={this.updateState} >About</Link></li>
               </ul>
            </div>
            <Prompt
               when={this.state.flagConfirmation}
               message="Are you sure you want to go to this boring page?" />
         </nav>
      );
   }
}

module.exports = Header;