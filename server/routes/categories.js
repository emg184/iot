const passport = require('passport');

var queries = require('../queries/categories');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.post('/categories', requireAuth, function(req, res, next) {
    queries.createCategory( req.body.name, req.body.image, req.body.parent, req.body.status, req.body.description, req.body.id)
      .then(function(result) {
          return res.status(200).json({ redirect: "/user", obj: result});
      })
  })
  app.get('/categories', requireAuth, function(req, res, next) {
    queries.getCategories( req.body.user_id, req.body.parent_id)
  })
}
