const create = async (req, res) => {
  const {
    Cart,
    body: { name, image_url, price, quantity },
  } = req;

  const newCartItem = await Cart.create(name, image_url, price, quantity);

  newCartItem
    ? res.status(201).send(newCartItem)
    : res.status(500).send({ err: "Can't create" });
};
module.exports = create;
