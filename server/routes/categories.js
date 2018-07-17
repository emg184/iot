const passport = require('passport');
const keys = require('../config.js');
const jwt = require('jsonwebtoken');

var queries = require('../queries/categories');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.post('/categories', requireAuth, function(req, res, next) {
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.createCategory( req.body.name, req.body.image, req.body.parent, req.body.status, req.body.description, user.sub)
      .then(function(result) {
          return res.status(200).json({ redirect: "/user", obj: result});
      })
  })
  app.get('/categories/:parentId', function(req, res, next) {
    console.log(req.params.parentId);
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.getRootCategories(user.sub)
      .then( result => res.status(200).json(result) )
  })
  app.get('/categories/:userId/:parentId', function(req, res, next) {
    queries.getCategories(req.params.userId, req.params.parentId)
      .then( result => {
        console.log(result)
        res.status(200).json(result)
      })
  })
}
