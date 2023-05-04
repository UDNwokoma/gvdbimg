const router = require('express').Router();
const Account = require('../models/account.model');

router.route('/').post((req, res) => {
  Account.find()
  .then(email => res.json(email))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/find').post((req, res) => {
  const email = req.body.email;
  Account.find({email:email})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/findref').post((req, res) => {
  const ref = req.body.ref;
  Account.find({ref:ref})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/id').post((req, res) => {
  const id = req.body.id;
  Account.find({id:id})
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const email = req.body.email
  const img = req.body.img
  const id = req.body.id

  const newCoupon = new Account({ email,img,id });

  newCoupon.save()
    .then(() => res.json('account creaated!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/up').post((req, res) => {
  const email = req.body.email
  Account.findOne({email:email})
    .then(account => {
      account.email = req.body.email;
      account.img = req.body.img;
      account.id = req.body.id;
      
      account.save()
        .then(() => res.json('account updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
  Account.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/del').post((req, res) => {
  const id = req.id;
  Account.findOneAndRemove({"id":id})
    .then(() => res.json('accont Removed'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Account.findById(req.params.id)
    .then(exercise => {
      exercise.accontname = req.body.accontname;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;