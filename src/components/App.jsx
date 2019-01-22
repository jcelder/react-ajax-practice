import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
      response: ''
      };
    // creates lexical scope binding for `this` keyword
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }
  handleNameChange(evt) {
    this.setState({name: evt.target.value});
  }
  handleMessageChange(evt) {
    this.setState({message: evt.target.value});
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const server = 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting';
    let msgObject = {'name': this.state.name, 'message': this.state.message};
    $.ajax({
      url: server,
      type: 'POST',
      data: JSON.stringify(msgObject),
      contentType: 'application/json',
      // use fat arrow syntax to avoid losing `this` binding in setState function
      success: (resultFromServer) => {
        this.setState({response: resultFromServer});
      },
      error: function(errorMsg) {
        console.log(errorMsg);
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          Returned value: {this.state.response}
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.name} onChange={this.handleNameChange} />
          </label>
          <label>
            Message:
            <input type="text" value={this.state.message} onChange={this.handleMessageChange} />
          </label>
          <input type="submit" value="Send Message"  />
        </form>
      </div>
    );
  }
}

export default App;

