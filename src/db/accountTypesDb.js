const connection = require('./connection');

const findAll = async () => connection.execute('SELECT * FROM account_types');

const findById = async (id) => connection.execute(`SELECT
* FROM account_types
WHERE id = ?`, [id]);

const update = async (id, { type }) => connection.execute(`
UPDATE account_types
SET type = ?
WHERE id = ?`, [type, id]);

module.exports = {
  findAll,
  findById,
  update,
};