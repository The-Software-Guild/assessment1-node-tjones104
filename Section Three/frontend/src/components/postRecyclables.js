import React, { Component } from "react";

class PostRecyclables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      recyclable: false,
      quantity: 1,
      ppu: 0.01,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/itemsIntake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        alert("Succuss: Item added");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Error: Could not fetch");
      });
  };

  render() {
    return (
      <div className="post-item">
        <h2>Add a new item</h2>
        <form className="post-form" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
          <label>Recyclable:</label>
          <select
            value={this.state.recyclable}
            name="recyclable"
            onChange={this.handleChange}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={this.state.quantity}
            min="1"
            onChange={this.handleChange}
            required
          />
          <label>Price per Unit:</label>
          <input
            type="number"
            name="ppu"
            value={this.state.ppu}
            min="0"
            step="0.01"
            onChange={this.handleChange}
            required
          />
          <button>Add Item</button>
        </form>
      </div>
    );
  }
}

export default PostRecyclables;
