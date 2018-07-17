const passport = require('passport');
const keys = require('../config.js');
const jwt = require('jsonwebtoken');


var queries = require('../queries/tests');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.post('/tests', requireAuth, function(req, res, next) {
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.createTest( user.sub, req.body.board_id, req.body.test_name, req.body.imageUrl, req.body.active,
req.body.description)
    .then( result => {
      console.log(result);
      res.status(200).json(result)
    })
  })
  app.get('/boards/:boardId/tests', requireAuth, function(req, res, next) {
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.getBoardTest(user.sub, req.params.boardId)
    .then( result => {
      res.status(200).json(result)
    })
  })
  app.get('/boards/:boardId/tests/user', requireAuth, function(req, res, next) {
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.getUserTest(user.sub)
    .then( result => {
      res.status(200).json(result)
    })
  })
  app.get('/board/:boardId/tests/:testId', requireAuth, function(req, res, next) {
    var user = jwt.verify(req.headers.authorization, keys.secret);
    queries.getTest(user.sub, req.params.testId)
    .then( result => {
      res.status(200).json(result)
    })
  })
}
