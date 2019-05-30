var React = require('react');
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;
var Redirect = require('react-router-dom').Redirect;

var Home = require('./Components/homePage');
var Authors = require('./Components/authors/authorPage');
var Author = require('./Components/authors/ManageAuthorPage');
var About = require('./Components/about/aboutPage');
var NotFound = require('./Components/notFoundPage');

class Routes extends React.Component {
   render() {
      return (
         <div>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route path="/authors" component={Authors} />
               <Route path="/author" component={Author} />
               <PrivateRoute path="/about" component={About} />
               <Redirect from="/about-us" to="/about" />
               <Redirect from="/about/*" to="/about" />
               <Route component={NotFound} />
            </Switch>
         </div>
      );
   }
}

function PrivateRoute({ component: Component, path }) {
   return (
      <Route
         exact path={path}
         render={(props) => 
            confirm("Are you sure?") ? (
               <Component />
            ) : ( <Redirect to="/">{console.log()}</Redirect> )
         }
      />
   );
}

module.exports = Routes;