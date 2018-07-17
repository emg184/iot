const passport = require('passport');
const keys = require('../config.js');
const jwt = require('jsonwebtoken');


var queries = require('../queries/boards');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.post('/boards', requireAuth, function(req, res, next) {
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.createBoard( user.sub, req.body.category_id, req.body.board_name, req.body.imageUrl, req.body.active,
req.body.description, req.body.secretKey)
    .then( result => {
      console.log(result);
      res.status(200).json(result)
    })
  })
  app.get('/boards/:categoryId', requireAuth, function(req, res, next) {
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.getCategoryBoard(user.sub, req.params.categoryId)
    .then( result => {
      res.status(200).json(result)
    })
  })
}
