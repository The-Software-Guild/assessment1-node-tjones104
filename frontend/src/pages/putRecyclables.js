import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PutRecyclables = () => {
    const [recycledItems, setrecycledItems] = useState([])
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [recyclable, setRecyclable] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [ppu, setPPU] = useState(0);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const recycledItems = { name, description, recyclable, quantity, ppu };
        fetch('http://localhost:8080/api/itemsIntake/' + id, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recycledItems)
        }).then(() => {
        history.push('/getRecyclables');
        })
    }
    
    useEffect(() => {
        fetch('http://localhost:8080/api/itemsIntake')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setrecycledItems(data);
          })
      }, [])


    return (
        <div className="put-item">
        <div>
        <h2>Update an item</h2>
        <form onSubmit={handleSubmit}>
            <label>Id:</label>
            <input 
            type="text" 
            required 
            value={id}
            onChange={(e) => setID(e.target.value)}
            />
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
            onChange={(e) => setQuantity(e.target.value)}
            />
            <label>Price per Unit:</label>
            <input 
            type="number" 
            required 
            value={ppu}
            onChange={(e) => setPPU(e.target.value)}
            />
            <button>Update Item</button>
        </form>
        </div>
        <div className="get-list-put">
        <table className="show-list" >
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
           {recycledItems.map(items => (
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
      </div>
        </div>
    );
}
    
export default PutRecyclables;