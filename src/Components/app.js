$ = jQuery = require('jquery'); // Declare jquery global in the scripts

var React = require('react');
var Header = require('./common/header');

class App extends React.Component {
   render() {
      return (
         <div>
            <Header />
            <div className="container-fluid">
               {this.props.children}
            </div>
         </div>
      );
   }
}

module.exports = App;