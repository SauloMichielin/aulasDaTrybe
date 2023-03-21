const { Router } = require('express');
const { isMissingParams, isValidName, isValidEmail } = require('../middlewares');
const accountsDb = require('../db/accountsDb');

const accountsRouter = Router();

const validators = [isMissingParams, isValidName, isValidEmail];

accountsRouter.get('/', async (_req, res) => {
  const [accounts] = await accountsDb.findAll();
  return res.status(200).json(accounts);
});

accountsRouter.post('/', ...validators, async (req, res) => {
  const { name, email, type } = req.body;
  const [hasAccount] = await accountsDb.getByEmail(email);
  if (hasAccount.length > 0) {
    return res.status(400).json({
      message: 'Account already exist',
    });
  }
  const result = await accountsDb.create({ name, email, type });

  return res.status(201).json({
    id: result[0].insertId,
    name,
    email, 
    type,
  });
});

accountsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, type } = req.body;

  const result = await accountsDb.update(id, { name, email, type });

  return res.status(200).json(result);
});

accountsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  
  const result = await accountsDb.deleteOne(id);

    if (result[0].affectedRows === 1) {
      return res.status(204).end();
    }

  return res.status(500).json({
    message: `Cannot delete Account with id ${id}`,
  });
});

accountsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const account = await accountsDb.findById(id);
  return res.status(200).json(account);
});

module.exports = accountsRouter;