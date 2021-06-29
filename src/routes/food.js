const express = require('express');
const Food = require('../models/food');
const validator = require('../middleware/validator');
const router = express.Router();
const food = new Food();

router.get('/', getFood);

router.get('/:id', validator, getFood);

router.post('/', createFood);

router.put('/:id', validator, updateFood);

router.delete('/:id', validator, deleteFood);

function getFood(req, res) {
  const resObj = food.read(req.params.id);
  res.status(200).json(resObj)
}
function createFood(req, res) {
  const resObj = food.create(req.body);
  res.status(200).json(resObj)
}
function updateFood(req, res) {
  const resObj = food.update(req.params.id, req.body);
  res.status(200).json(resObj)
}
function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);

  res.status(204).send('deleted');
}
module.exports = router;