
var React = require('react');

class Home extends React.Component{
   render(){
      return (
         <div className="jumbotron" >
            <h1> Pluralsight administration </h1>
            <p> React, React router, and Flux for ultra - responsive web apps. </p>
            {/* <Link to="about" className="btn btn-primary btn-lg">Learn more</Link> */}
         </div>
      );
   }
}

module.exports = Home;