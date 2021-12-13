const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

// stored data array (ppu = price per unit)
const recycledItems = [
  {
    name: "Pizza Box",
    description: "Cardboard",
    recyclable: true,
    quantity: 1,
    ppu: 2,
    _id: uuidv4(),
  },
  {
    name: "To-go container",
    description: "Polystyrene Foam",
    recyclable: false,
    quantity: 2,
    ppu: 4,
    _id: uuidv4(),
  },
];

// GET
router.get("/itemsIntake", (req, res) => {
  res.status(200).send(recycledItems);
});

// POST
router.post("/itemsIntake", (req, res) => {
  let { name, description, recyclable, quantity, ppu } = req.body;
  recycledItems.push({
    name: name,
    description: description,
    recyclable: recyclable,
    quantity: quantity,
    quantity: quantity,
    ppu: ppu,
    _id: uuidv4(),
  });
  res.status(200).send();
});

// UPDATE
router.put("/itemsIntake/:id", (req, res) => {
  if (
    recycledItems.findIndex(function (recycledItems) {
      return recycledItems._id == req.params.id;
    }) != -1
  ) {
    let { name, description, recyclable, quantity, ppu } = req.body;
    let index = recycledItems.findIndex(function (recycledItems) {
      return recycledItems._id == req.params.id;
    });
    Object.assign(recycledItems[index], {
      name: name,
      description: description,
      recyclable: recyclable,
      quantity: quantity,
      quantity: quantity,
      ppu: ppu,
    });
    let id = req.params.id;
    res.status(200).send();
  } else {
    res.status(404).send("The id was not found");
  }
});

// DELETE
router.delete("/itemsIntake/:id", (req, res) => {
  if (
    recycledItems.findIndex(function (recycledItems) {
      return recycledItems._id == req.params.id;
    }) != -1
  ) {
    let index = recycledItems.findIndex(function (recycledItems) {
      return recycledItems._id == req.params.id;
    });
    recycledItems.splice(index, 1);
    let id = req.params.id;
    res.status(200).send();
  } else {
    res.status(404).send("The id was not found");
  }
});

module.exports = router;
