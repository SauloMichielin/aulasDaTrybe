const isMissingParams = (req, res, next) => {
  const { name, email, type } = req.body;
  if (!name || !email || !type) {
    return res.status(400).json({
      message: 'Missing Params',
    });
  }
  return next();
};

const isValidName = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 3) {
    return res.status(422).json({
      message: 'Name must contain at least 3 characters',
    });
  }
  return next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;
  const pattern = /\S+@\S+\.\S+/;
  if (!pattern.test(email)) {
    return res.status(422).json({
      message: 'Invalid email',
    });
  }
  return next();
};

module.exports = {
  isMissingParams,
  isValidName,
  isValidEmail,
};