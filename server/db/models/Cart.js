const knex = require('./knex');

class Cart {
  static async create(name, image_url, price, quantity) {
    try {
      const query = `INSERT INTO cart (name, image_url, price, quantity) values (?, ?, ?, ?) ON CONFLICT (name) DO UPDATE SET quantity = cart.quantity + 1 RETURNING *`;
      const res = await knex.raw(query, [name, image_url, price, quantity]);
      return res.rows[0];
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async list() {
    try {
      const query = `SELECT * FROM cart`;
      const res = await knex.raw(query);
      return res.rows;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async destroy(id) {
    try {
      const query = `DELETE FROM cart WHERE id = (?)`;
      const res = await knex.raw(query, [id]);
      return res.rows || null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async destroyAll() {
    try {
      await knex.raw('TRUNCATE cart');
      return true;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async update() {}
}

module.exports = Cart;
