const destroyAll = async (req, res) => {
  const { Cart } = req;
  await Cart.destroyAll();
  res.sendStatus(204);
};
module.exports = destroyAll;
