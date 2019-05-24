var React = require('react');

function createAuthorRow(author) {
   return (
      <tr key={author.id}>
         <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
         <td>{author.firstName} {author.lastName}</td>
      </tr>
   );
}
class AuthorList extends React.Component {

   render() {

      return (
         // <div>
         //    <AuthorList authors={this.state.authors} />
         // </div>
         <div>
            <table className="table">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Name</th>
                  </tr>
               </thead>
               <tbody>
                  {this.props.authors.map(createAuthorRow, this)}
               </tbody>
            </table>
         </div>
      );
   }
}


module.exports = AuthorList;
