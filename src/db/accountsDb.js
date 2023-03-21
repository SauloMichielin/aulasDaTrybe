const connection = require('./connection');

const getByEmail = async (email) => connection.execute(`
  SELECT email FROM accounts
  WHERE email = ?`, [email]);

const findAll = async () => connection.execute(
  `SELECT a.id, a.name, a.email, 
  IF(a.active, "Ativo", "Cancelado") as status,
  a.amount, at.type FROM accounts a 
  INNER JOIN account_types at ON at.id = a.type`,
  );

const create = async ({ name, email, type }) => 
  connection.execute(`INSERT INTO 
    accounts(name, email, type)
    VALUES (?, ?, ?)`, [name, email, type]);

const update = async (id, { name, email, type }) => 
  connection.execute(`UPDATE accounts 
  SET name=?, email=?, type=?
    WHERE id=?`, [name, email, type, id]);

const findById = async (id) => connection.execute(`SELECT a.id, a.name, a.email, 
  IF(a.active, "Ativo", "Cancelado") as status,
  a.amount, at.type FROM accounts a 
  INNER JOIN account_types at ON at.id = a.type
  WHERE a.id = ?`, [id]);

  const deleteOne = async (id) => connection.execute(`DELETE FROM
    accounts WHERE id = ?`, [id]);

module.exports = {
  getByEmail,
  findAll,
  create,
  update,
  findById,
  deleteOne,
};