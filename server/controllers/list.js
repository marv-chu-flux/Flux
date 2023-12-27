const list = async (req, res) => {
  const { Cart } = req;

  const totalCart = await Cart.list();
  res.send(totalCart);
};
module.exports = list;
