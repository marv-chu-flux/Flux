const destroy = async (req, res) => {
  const {
    Cart,
    params: { id },
  } = req;

  const result = await Cart.destroy(Number(id));
  res.sendStatus(result ? 204 : 404);
};
module.exports = destroy;
