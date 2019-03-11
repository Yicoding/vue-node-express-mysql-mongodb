var express = require('express')
var router = express.Router();
var db = require('./db');
var mongoose = require('mongoose')
var ObjectId = require('mongodb').ObjectID;
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

// user
// /user/findall/aa
router.get('/api/user/findall', (req, res) => {
  db.User.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})
// /user/add
router.post('/api/user/add', (req, res) => {
  var addUser = new db.User({
    name: req.body.name,
    password: req.body.password,
    fullName: req.body.fullName,
    role: req.body.role,
    company: req.body.company,
    phone: req.body.phone,
    mail: req.body.mail
  })
  addUser.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})
// /user/put
router.put('/api/user/put', (req, res) => {
  db.User.find({'_id': ObjectId(req.body._id)}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      data[0].name = req.body.name
      data[0].password = req.body.password
      data[0].fullName = req.body.fullName
      data[0].role = req.body.role
      data[0].company = req.body.company
      data[0].phone = req.body.phone
      data[0].mail = req.body.mail
      data[0].save((err, result) => {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
})
// /user/findone
router.get('/api/user/findone', (req, res) => {
  db.User.find({'_id': ObjectId(req.query._id)}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data[0])
    }
  })
})
// /user/delete
router.delete('/api/user/:_id', (req, res) => {
  db.User.remove({'_id': ObjectId(req.params._id)}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// company
// /company/findall
router.get('/api/company/findall', function (req, res) {
  db.Company.find({}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})
// /company/add
router.post('/api/company/add', (req, res) => {
  console.log(req.body)
  var addCompany = new db.Company({
    name: req.body.name,
    createTime: Date.now()
  })
  addCompany.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})
// /company/findone
router.get('/api/company/findone', (req, res) => {
  db.Company.find({'_id': ObjectId(req.query._id)}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data[0])
    }
  })
})
// /company/put
router.put('/api/company/put', (req, res) => {
  db.Company.find({'_id': ObjectId(req.body._id)}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      // res.send(data[0])
      data[0].name = req.body.name
      data[0].save((err, result) => {
        if (err) {
          res.send(err)
        } else {
          res.send(result)
        }
      })
    }
  })
})
// /company/delete
router.delete('/api/company/:_id', (req, res) => {
  db.Company.remove({'_id': req.params._id}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// role
// /role/findall
router.get('/api/role/findall', function (req, res, next) {
  db.Role.find({}, function (err, data) {
    if (err) {
      console.log('Err:' + err)
    } else {
      res.send(data)
    }
  })
})
// /role/add
router.post('/api/role/add', function (req, res) {
  if (!req.body.name) {
    res.status(500).send('角色不能为空')
  } else if (!req.body.fullName) {
    res.status(500).send('角色名不能为空')
  } else {
    var addRole = new db.Role({
      name: req.body.name,
      fullName: req.body.fullName
    })
    addRole.save((err, data) => {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
  }
})
// /role/findone
router.get('/api/role/findone', function (req, res) {
  db.Role.find({'_id': ObjectId(req.query._id)}, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      console.log(data)
      res.send(data[0])
    }
  })
})
// role/put
router.put('/api/role/put', function (req, res) {
  if (!req.body.name) {
    res.status(500).send('角色不能为空')
  } else if (!req.body.fullName) {
    res.status(500).send('角色名不能为空')
  } else {
    db.Role.find({'_id': ObjectId(req.body._id)}, (err, data) => {
      if (err) {
        res.send(err)
      } else {
        console.log(data)
        data[0].name = req.body.name
        data[0].fullName = req.body.fullName
        data[0].save((err, result) => {
          if (err) {
            res.send(err)
          } else {
            res.send(result)
          }
        })
      }
    })
  }
})
// /role/delete
router.delete('/api/role/:_id', function (req, res) {
  db.Role.remove({'_id': ObjectId(req.params._id)}, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.send(data)
    }
  })
})

module.exports = router