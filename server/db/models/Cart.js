const knex = require('./knex');

class Cart {
  static async create(name, image_url, price, quantity) {
    try {
      const check = `SELECT * FROM cart WHERE name = (?)`;
      const resCheck = await knex.raw(check, [name]);

      if (resCheck.rows.length === 0) {
        const query = `INSERT INTO cart (name, image_url, price, quantity) values (?, ?, ?, ?) returning *`;
        const res = await knex.raw(query, [name, image_url, price, quantity]);
        return res.rows[0];
      } else {
        await Cart.increment(name);
      }
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

  static async destroyAll() {}

  static async increment(name) {
    const query = `UPDATE cart SET quantity = quantity + 1 WHERE name = (?)`;
    const res = await knex.raw(query, [name]);
    return res.rows[0] || null;
  }

  static async decrement() {}
}

module.exports = Cart;
