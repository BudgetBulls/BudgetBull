const knex = require('../knex');

class Budget {
  constructor({ id, user_id, date, description, amount, type }) {
    this.id = id;
    this.userId = user_id;
    this.date = date;
    this.description = description;
    this.amount = amount; 
    this.type = type;
  }

  static async getAllByUserId(userId) {
    try {
      const query = 'SELECT * FROM budget WHERE user_id = ?';
      const { rows } = await knex.raw(query, [userId]);
      return rows.map((item) => new Budget(item));
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async create(userId, date, description, amount, type ) {
    try {
      const query = `INSERT INTO budget (user_id, date, description, amount, type)
        VALUES (?, ?, ?, ?, ?) RETURNING *`;
      const { rows: [item] } = await knex.raw(query, [userId, date, description, amount, type]);
      return new Budget(item);
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async update(id, { date, description, amount, type }) {
    try {
      const query = `UPDATE budget
        SET date = ?, description = ?, amount = ?, type = ?
        WHERE id = ? RETURNING *`;
      const { rows: [item] } = await knex.raw(query, [date, description, amount, type, id]);
      return item ? new Budget(item) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  static async delete(id) {
    try {
      const query = 'DELETE FROM budget WHERE id = ?';
      await knex.raw(query, [id]);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
}

module.exports = Budget;