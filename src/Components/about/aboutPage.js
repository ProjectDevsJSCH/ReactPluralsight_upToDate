
var React = require('react');
var Prompt = require('react-router-dom').Prompt;

class About extends React.Component {

   render() {
      return (
         <div>
            <h1>About</h1>
            <p>
               This application uses the following technologies:
            </p>
            <ul>
               <li>React</li>
               <li>React router</li>
               <li>Flux</li>
               <li>Node</li>
               <li>Gulp</li>
               <li>Browserify</li>
               <li>Bootstrap</li>
            </ul>
            <Prompt 
               when={true}
               message="Are you sure you want to leave?" />
         </div>
      );
   }
}

module.exports = About;