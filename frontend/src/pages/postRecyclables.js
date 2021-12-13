import { useState } from "react";
import { useHistory } from "react-router-dom";

const PostRecyclables = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [recyclable, setRecyclable] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [ppu, setPPU] = useState(0.01);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const recycledItems = { name, description, recyclable, quantity, ppu };
    fetch("http://localhost:8080/api/itemsIntake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recycledItems),
    }).then(() => {
      history.push("/getRecyclables");
    });
  };

  return (
    <div className="post-item">
      <div></div>
      <h2>Add a new item</h2>
      <form className="post-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Recyclable:</label>
        <select
          value={recyclable}
          onChange={(e) => setRecyclable(e.target.value)}
        >
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <label>Quantity:</label>
        <input
          type="number"
          required
          value={quantity}
          min="1"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label>Price per Unit:</label>
        <input
          type="number"
          required
          value={ppu}
          min="0"
          step="0.01"
          onChange={(e) => setPPU(e.target.value)}
        />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default PostRecyclables;
