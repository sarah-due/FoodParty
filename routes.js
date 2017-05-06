
var express = require('express')
var router = express.Router()
var food = require('./food.json')

var app = express()

var viewFood =
{ title: "Food and Stuff!",
  food: food
}

router.get('/', function (req, res) {
  res.redirect('/food')
})

router.get('/food',(req,res)=>{
  res.render('foods/index', viewFood)
})

//
// router.get('/:id', function (req, res) {
//   // ...
// })

//
// router.post('/', function (req, res) {
//   // ...
// })

module.exports = router
