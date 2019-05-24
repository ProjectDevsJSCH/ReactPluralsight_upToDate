var React = require('react');
var AuthorApi = require('../../api/authorApi');
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

      function createAuthorRow(author) {
         return (
            <tr key={author.id}>
               <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
               <td>{author.firstName} {author.lastName}</td>
            </tr>
         );
      }

      return (
         // <div>
         //    <AuthorList authors={this.state.authors} />
         // </div>
         <div>
            <h1>Authors</h1>
            <AuthorList authors={this.state.authors} />
         </div>
      );
   }
}

module.exports = Authors;