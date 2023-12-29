const update = async (req, res) => {
  const {
    Cart,
    params: { id },
    body: { op },
  } = req;

  const newQuant = await Cart.update(op, id);
  res.send(newQuant);
};
module.exports = update;
