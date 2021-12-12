const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// stored data array (ppu = price per unit)
const recycledItems = [
    {   
        name:'Pizza Box',
        description: 'Cardboard',
        recyclable: true,
        quantity: 1,
        ppu: 2,
        _id: 1234, 
    },
    {   
        name:'Can',
        description: 'Aluminum',
        recyclable: true,
        quantity: 5,
        ppu: 0.5,
        _id: 12345, 
    }, 
];

// GET
router.get("/itemsIntake", (req, res) => {
    res.status(200).send(recycledItems);
});

// POST
router.post("/itemsIntake", (req, res) =>{
    let {name, description, recyclable, quantity, ppu} = req.body;
    //console.log(name, description, recyclable, quantity, ppu);
    recycledItems.push({name : name, description : description, recyclable : recyclable, quantity : quantity, quantity : quantity, ppu : ppu, _id : uuidv4()});
    //res.status(204).send();
    res.send({type:'POST', recycledItems});
});

// UPDATE
router.put('/itemsIntake/:id', (req, res) =>{
    if ((recycledItems.findIndex(function(recycledItems) {return recycledItems._id == req.params.id})) != -1){
        let {name, description, recyclable, quantity, ppu} = req.body;
        let index = recycledItems.findIndex(function(recycledItems) {return recycledItems._id == req.params.id})
        Object.assign(recycledItems[index], {name : name, description : description, recyclable : recyclable, quantity : quantity, quantity : quantity, ppu : ppu})
        let id = req.params.id
        res.send({type:'UPDATE', id, recycledItems});
    }else{
        res.status(404).send('The id was not found');
    }
});

// DELETE
router.delete("/itemsIntake/:id", (req, res) =>{
    if ((recycledItems.findIndex(function(recycledItems) {return recycledItems._id == req.params.id})) != -1){
        let index = recycledItems.findIndex(function(recycledItems) {return recycledItems._id == req.params.id})
        recycledItems.splice(index, 1);
        let id = req.params.id
        res.send({type:'DELETE', id, recycledItems});
        //res.status(204).send();
        }else{
        res.status(404).send('The id was not found');
        }
});

module.exports = router;