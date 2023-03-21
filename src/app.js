const express = require('express');
const accountsRouter = require('./routes/accountsRouter');
const accountTypesRouter = require('./routes/accountTypesRouter');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Welcome to TrybeBank',
  });
});

app.use('/accounts', accountsRouter);
app.use('/account_types', accountTypesRouter);

module.exports = app;
