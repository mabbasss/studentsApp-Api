var express = require('express');
var router = express.Router();
var students = require('../data/students')
var _ = require('lodash');

router.use('/:id', (req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  let student = _.filter(students, {id:req.params.id})[0]
    if (student) {
      req.student = student;
      return next();
    }
    return res.sendStatus(404);
  });
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.json(students);
});

router.post('/', function(req, res, next){
  res.set('Access-Control-Allow-Origin', '*');
  res.json({'message': 'not implemented'})
});

router.patch('/:id', function(req, res, next){
  res.set('Access-Control-Allow-Origin', '*');
  Object.entries(req.body).forEach((item) => {
    const key = item[0];
    const value = item[1];
    req.student[key] = value;
    console.log(req.student);
  });
  
  res.json(req.student);
  
});

router.get('/:id', function(req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(_.filter(students, {id:req.params.id})[0]);
});


module.exports = router;
