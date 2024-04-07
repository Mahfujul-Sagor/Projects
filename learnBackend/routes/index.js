var express = require('express');
var router = express.Router();

const userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});


router.get('/create', async function(req, res) {
  let userData = await userModel.create({
    username: 'sagorika',
    nickname: 'async3',
    description: 'someone dont know if exists or not just for practice',
    catagories: ['fashion', 'life'],
  });
  res.send(userData);
});




// Intermediate Mongodb


// 1. case-insensitive search.. here {^ means start with and $ means ends with}

// router.get('/find', async function(req, res) {
//   let regex = new RegExp('^SaGor$', 'i');
//   let user = await userModel.findOne({username: regex});
//   res.send(user);
// });


// 2. searching documents with array containing a set of values

// router.get('/find', async function(req, res) {
//   let user = await userModel.find({catagories : {$all : ['fashion']}});
//   res.send(user);
// });


// 3. searching documents with a specific date range

// router.get('/find', async function(req, res) {
//   let date1 = new Date('2024-04-07');
//   let date2 = new Date('2024-04-08');
//   let user = await userModel.find({dateCreated: {$gte: date1, $lte: date2}});
//   res.send(user);
// });


// 4. filtering documents based on the existence of a field

// router.get('/find', async function(req, res) {
//   let user = await userModel.find({catagories: {$exists: true}});
//   res.send(user);
// });


// 5. filtering documents based on a specific fields length

// router.get('/find', async function(req, res) {
//   let user = await userModel.find({
//     $expr: {
//       $and: [
//         {$gte: [{$strLenCP: '$username'}, 0]},
//         {$lte: [{$strLenCP: '$username'}, 5]},
//       ]
//     }
//   });
//   res.send(user);
// });









// Basic mongodb data create update and delete

// router.get('/create', async function(req, res) {
//   const createdUset = await userModel.create({
//     name: 'mahfujul sagor',
//     username: 'sagor',
//     email: 'something@gmail.com',
//     password: 'fhlashfl4hh4lh34',
//   });
//   res.send(createdUset);
// });

// router.get('/read', async function(req, res) {
//   const alluser = await userModel.find();
//   res.send(alluser);
// });

// router.get('/delete', async function(req, res) {
//   const deleteduser = await userModel.findOneAndDelete({username: 'sagor'});
//   res.send(deleteduser);
// });




// connect flash 

// router.get('/failed', function(req, res) {
//   req.flash("age", 20);
//   res.send('age created successfully');
// });
// router.get('/check', function(req, res) {
//   console.log(req.flash("age"));
//   res.send('check your console log');
// });




module.exports = router;
