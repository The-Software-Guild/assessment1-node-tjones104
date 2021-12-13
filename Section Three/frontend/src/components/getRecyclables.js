import React, { Component } from "react";

class GetRecyclables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recycledItems: [],
    };
  }

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
      <div className="get-list">
        <h2>Recycled Items</h2>
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
    );
  }
}

export default GetRecyclables;
