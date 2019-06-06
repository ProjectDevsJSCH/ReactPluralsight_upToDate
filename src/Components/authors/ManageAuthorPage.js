var React = require('react');
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');
var Prompt = require('react-router-dom').Prompt;


class ManageAuthorPage extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         author: { id: '', firstName: '', lastName: '' },
         errors: {},
         dirty: false
      };

      this.setAuthorState = this.setAuthorState.bind(this);
      this.saveAuthor = this.saveAuthor.bind(this);
      this.goToRoute = this.goToRoute.bind(this);
      this.authorFormIsValid = this.authorFormIsValid.bind(this);
      this.updateState = this.updateState.bind(this);

      console.log(this.props);
   }

   componentDidMount() {
      if (this.props.location.state !== undefined) {
         var authorId = this.props.location.state.id;
         if (authorId) {
            this.setState({ author: AuthorApi.getAuthorById(authorId) });
         }
      }
   }

   setAuthorState(event) {
      this.setState({ dirty: true });
      var field = event.target.name;
      var value = event.target.value;
      this.state.author[field] = value;
      return this.setState({ author: this.state.author });
   }

   saveAuthor(event, f){
      event.preventDefault();
      if (!this.authorFormIsValid()) {
         return;
      }
      AuthorApi.saveAuthor(this.state.author);
      toastr.success('Author saved.');
      this.updateState();
   }

   updateState(){
      this.setState({
         dirty: false
      }, () => {this.goToRoute('/authors');} );
   }

   authorFormIsValid() {
      var formIsValid = true;
      this.state.errors = {}; //clear any previous errors
      if (this.state.author.firstName.length < 3) {
         this.state.errors.firstName = 'First name must be at least 3 characters';
         formIsValid = false;
      }
      if (this.state.author.lastName.length < 3) {
         this.state.errors.lastName = 'Last name must be at least 3 characters';
         formIsValid = false;
      }
      this.setState({ errors: this.state.errors });
      return formIsValid;
   }

   goToRoute(route) {
      this.props.history.push(route);
   }

   render() {
      return (
         <div>
            <AuthorForm
               author={this.state.author}
               onChange={this.setAuthorState}
               onSave={this.saveAuthor}
               errors={this.state.errors} />
            <Prompt
               when={this.state.dirty}
               message="Are you sure you want to leave without saving?" />
         </div>
      );
   }
}

module.exports = ManageAuthorPage;