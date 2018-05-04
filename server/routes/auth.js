const queries = require("../queries/auth.js");
const passportService = require('../services/passport');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.sign({ sub: user[0].id , iat: Math.floor(Date.now() / 1000) - 30 }, config.secret);
}

module.exports = app => {
  app.post("/signup", function (req, res, next) {
    console.log(req.body)
    queries.saveUser(req.body.email, req.body.pass, function(err) {
      if (err) {
        return next(err);
      }
    })
      .then(function (result) {
          res.status(200).json(result)
      })
      .catch(function (error) {
          next(error);
      });
  });
  app.post('/login', requireSignin,
  function(req, res, next) {
    queries.findUserByEmail(req.body.email)
      .then( result => {
        res.send({ token: tokenForUser(req.user), userId: result[0].id });
      })
  });
  app.get("/user/:id", function (req, res, next) {
    queries.findUserById(req.params.id)
      .then(function (result) {
          res.status(200).json(result)
      })
        .catch(function (error) {
            next(error);
        });
  });
  app.get("/user", requireAuth, function (req, res, next) {
    var decoded = jwt.decode(req.headers.authorization, { signature: config.secret });
    Promise.resolve(decoded).then( usub => {
      queries.findUserId(usub.sub)
        .then(function (result) {
            return res.status(200).json(result)
        })
          .catch(function (error) {
              next(error);
          });
    })
  });
  app.get('/', requireAuth, function(req, res){
    res.send({ hi: 'there'});
  });
}
