import React, { Component } from "react";

class Keypress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "",
      keyCode: "",
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    this.setState({ key: e.key });
    this.setState({ keyCode: e.which });
  };

  render() {
    return (
      <div>
        <h1>Key Code Translator</h1>
        <h3>Press any key, and see what it's key code is</h3>
        <div class="keypress" id="output">
          Key Pressed: {this.state.key} <br />
          <br /> Key Code: {this.state.keyCode}
        </div>
      </div>
    );
  }
}

export default Keypress;
