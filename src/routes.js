var React = require('react');
var Router = require('react-router-dom');
var App = require('./Components/app');

var routes = (
   <Router>
      <Route path="/" component={App}/>
   </Router>
);



         // <Route name="app" path="/" handler={require('./components/app')}>
         //    <DefaultRoute handler={require('./components/homePage')} />
         //    {/* When there is not path, it takes the name as the path */}
         //    <Route name="authors" handler={require('./components/authors/authorPage')} />
         //    <Route name="about" handler={require('./components/about/aboutPage')} />
         // </Route>


module.exports = routes;