import React, { Component } from "react";

class DeleteRecyclables extends Component {
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
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        alert("Succuss: Item deleted");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Error: Could not delete");
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
      <div className="delete-item">
        <div>
          <h2>Delete an Item</h2>
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
            <button>Delete Item</button>
          </form>
        </div>
        <div className="get-list-delete">
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

export default DeleteRecyclables;
