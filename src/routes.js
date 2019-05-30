var React = require('react');
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;
var Redirect = require('react-router-dom').Redirect;

var Home = require('./Components/homePage');
var Authors = require('./Components/authors/authorPage');
var About = require('./Components/about/aboutPage');
var NotFound = require('./Components/notFoundPage');

class Routes extends React.Component {
   render() {
      return (
         <div>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/authors" component={Authors} />
               <Route path="/about" component={About} />
               <Redirect from="/about-us" to="/about" />
               <Route component={NotFound} />
            </Switch>
         </div>
      );
   }
}



// <Route name="app" path="/" handler={require('./components/app')}>
//    <DefaultRoute handler={require('./components/homePage')} />
//    {/* When there is not path, it takes the name as the path */}
//    <Route name="authors" handler={require('./components/authors/authorPage')} />
//    <Route name="about" handler={require('./components/about/aboutPage')} />
// </Route>


module.exports = Routes;