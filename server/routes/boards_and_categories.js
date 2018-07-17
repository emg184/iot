const passport = require('passport');
const keys = require('../config.js');
const jwt = require('jsonwebtoken');

var queries = require('../queries/boards_and_categories');
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.get('/category/:categoryId/all', requireAuth, function(req, res, next) {
    console.log("here");
    var user = jwt.verify(req.headers.authorization, keys.secret);
    var result = Promise.resolve(queries.getBoardsAndCategories(user.sub, req.params.categoryId === 'root' ? null : req.params.categoryId))
                  .then( result => {
                    return res.status(200).json(result)
                  })
  })
}
