import React from 'react';
import { Link } from 'react-router-dom';

class ZipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form className="zipForm" style={this.props.style} onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInputChange}
          placeholder="enter city"
          className="zipInput"
          type="text"
          value={this.state.inputText}
        />
        <Link
          className="button"
          to={{
            pathname: '/weather',
            search: `?city=${this.state.inputText.trim()}`,
          }}
        >
          Submit
        </Link>
      </form>
    );
  }
}

export default ZipForm;
