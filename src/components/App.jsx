import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: ''
      };
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
    alert('Message ' + this.state.message + ' was submitted by ' + this.state.name)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" value={this.state.value} onChange={this.handleNameChange} />
          </label>
          <label>
            Message:
            <input type="text" value={this.state.value} onChange={this.handleMessageChange} />
          </label>
          <input type="submit" value="Send Message"  />
        </form>
        <div>
          Returned value: {this.state.name} {this.state.message}
        </div>
      </div>
    );
  }
}

export default App;

