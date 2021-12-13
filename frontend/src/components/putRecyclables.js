import React, { Component } from "react";

class PutRecyclables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recycledItems: [],
      id: "",
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
    fetch("http://localhost:8080/api/itemsIntake/" + this.state.id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        alert("Succuss: Item updated");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Error: Could not update");
      });
  };

  componentDidMount() {
    fetch("http://localhost:8080/api/itemsIntake")
      .then((res) => res.json())
      .then((recycledItems) => {
        this.setState({ recycledItems });
      })
      .catch((error) => {
        alert("Error: Could not fetch");
      });
  }

  render() {
    return (
      <div className="put-item">
        <div>
          <h2>Update an item</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Id:</label>
            <input
              type="text"
              name="id"
              value={this.state.id}
              minlength="36"
              maxlength="36"
              onChange={this.handleChange}
              required
            />
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
              name="Recyclable"
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
            <button>Update Item</button>
          </form>
        </div>
        <div className="get-list-put">
          <table className="show-list">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Recyclable</th>
                <th>Quantity</th>
                <th>Price per Unit</th>
                <th>Id</th>
              </tr>
            </thead>
            {this.state.recycledItems.map((items) => (
              <tr key={items.id}>
                <td className="name">{items.name}</td>
                <td>{items.description}</td>
                <td>{items.recyclable.toString()}</td>
                <td>{items.quantity}</td>
                <td>{items.ppu}</td>
                <td>{items._id}</td>
              </tr>
            ))}
          </table>
          {this.state.recycledItems.length === 0 ? (
            <p className="noItems">No items found</p>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default PutRecyclables;
