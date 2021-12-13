import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const DeleteRecyclables = () => {
    const [recycledItems, setrecycledItems] = useState([])
    const [id, setID] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/itemsIntake/' + id, {
            method: 'DELETE'
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
        <div className="get-list">
        <h1>Type in the id of the item you would like to delete</h1>
        <form onSubmit={handleSubmit}>
        <label>Id:</label>
            <input 
            type="text" 
            required 
            value={id}
            onChange={(e) => setID(e.target.value)}
            />
            <button>Delete Item</button>
        </form>
        <table class="show-list" >
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
               <td>{items.name}</td>
               <td>{items.description}</td>
               <td>{items.recyclable.toString()}</td>
               <td>{items.quantity}</td>
               <td>{items.ppu}</td>
               <td>{items._id}</td>
             </tr>
           ))}
       </table>
      </div>
    );
}
 
export default DeleteRecyclables;