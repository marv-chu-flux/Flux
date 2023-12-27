const knex = require('./knex');

class Cart {
  static async create(name, image_url, price, quantity) {
    try {
      const query = `INSERT INTO cart (name, image_url, price, quantity) values (?, ?, ?, ?) returning *`;
      const res = await knex.raw(query, [name, image_url, price, quantity]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }
  static async list() {}
  static async increment() {}
  static async decrement() {}
  static async destroyAll() {}
}

module.exports = Cart;
