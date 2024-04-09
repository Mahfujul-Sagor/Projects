var express = require('express');
const passport = require('passport');
var router = express.Router();

const userModel = require('./users');

const localStrategy = require('passport-local');
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/profile", isLoggedIn, function (req, res) {
  res.render("profile");
});

router.post("/register", function (req, res, next) {
  var userData = new userModel({
    username: req.body.username,
    secret: req.body.secret,
  });
  userModel.register(userData, req.body.password)
    .then(function (registeredUser) {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile");
      });
    });
});


router.post('/login', passport.authenticate('local', {
  successRedirect: '/profile',
  failureRedirect: '/',
}), function(req, res){});


router.get('/logout', function(req, res, next){
  req.logout(function(err){
    if(err) { return next(err); }
    res.redirect('/');
  });
});


// safeguard function to prevent link edits
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};



module.exports = router;
