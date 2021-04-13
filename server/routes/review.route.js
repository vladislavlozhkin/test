const reviews = require('../controllers/review.controller');

module.exports = (app) => {
  app.post('/review/create', reviews.create);

  app.get('/review/query', reviews.findAll);
};
