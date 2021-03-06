$ = jQuery = require('jquery'); // Declare jquery global in the scripts

var React = require('react');
var Header = require('./common/header');
var Router = require('react-router-dom').HashRouter;
var Routes = require('../routes');

class App extends React.Component {
   render() {
      return (
         <div>
            <Router>
               <Header />
               <div className="container-fluid">
                  <Routes />
               </div>
            </Router>
         </div>
      );
   }
}

module.exports = App;