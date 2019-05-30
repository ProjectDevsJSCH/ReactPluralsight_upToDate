var React = require('react');
var AuthorApi = require('../../api/authorApi');
var Link = require('react-router-dom').Link;

var AuthorList = require('./authorList');

class Authors extends React.Component {
   constructor() {
      super();
      this.state = {
         authors: []
      };
   }

   componentDidMount() {
      this.setState({ authors: AuthorApi.getAllAuthors() });
   }

   render() {
      return (
         // <div>
         //    <AuthorList authors={this.state.authors} />
         // </div>
         <div>
            <h1>Authors</h1>
            <Link to="author" className="btn btn-primary">Add Author</Link>
            <AuthorList authors={this.state.authors} />
         </div>
      );
   }
}

module.exports = Authors;