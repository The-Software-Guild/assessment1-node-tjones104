import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const DeleteRecyclables = () => {
  const [recycledItems, setrecycledItems] = useState([]);
  const [id, setID] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/itemsIntake/" + id, {
      method: "DELETE",
    }).then(() => {
      history.push("/getRecyclables");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/itemsIntake")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setrecycledItems(data);
      });
  }, []);

  return (
    <div className="delete-item">
      <div>
        <h2>Delete an Item</h2>
        <form onSubmit={handleSubmit}>
          <label>Id:</label>
          <input
            type="text"
            required
            value={id}
            minlength="36"
            maxlength="36"
            onChange={(e) => setID(e.target.value)}
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
          {recycledItems.map((items) => (
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
        {recycledItems.length === 0 ? (
          <p className="noItems">No items found</p>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default DeleteRecyclables;
