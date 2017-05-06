
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded())

// router.get('/', function (req, res) {
//   // ...
// })
//
// router.get('/:id', function (req, res) {
//   // ...
// })
//
// router.post('/', function (req, res) {
//   // ...
// })

module.exports = router
