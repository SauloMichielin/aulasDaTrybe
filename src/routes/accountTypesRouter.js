const { Router } = require('express');
const accountTypesDb = require('../db/accountTypesDb');

const accountTypesRouter = Router();

accountTypesRouter.get('/', async (req, res) => {
  const [accountTypes] = await accountTypesDb.findAll();
  return res.status(200).json(accountTypes);
});

accountTypesRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [accountType] = await accountTypesDb.findById(id);
  return res.status(200).json(accountType);
});

accountTypesRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  const result = await accountTypesDb.update(id, { type });
  if (result[0].affectedRows === 1) {
    return res.status(200).json({
      message: 'Updated',
    });
  }
  return res.status(500).json({
    message: `Cannot update Account with id ${id}`,
  });
});

module.exports = accountTypesRouter;