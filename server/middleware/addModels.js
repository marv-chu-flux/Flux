const Cart = require('../db/models/Cart');

const addModels = (req, res, next) => {
  req.Cart = Cart;
  next();
};

module.exports = addModels;
