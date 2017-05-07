
var express = require('express')
var router = express.Router()
var food = require('./food.json')
var bodyParser = require('body-parser')
var fs = require('fs')

var app = express()

var foodList =
{ title: "Food and Stuff!",
  food: food
}

router.get('/', function (req, res) {
  res.redirect('/food')
})

router.get('/food',(req,res)=>{
  res.render('foods/index', foodList)
})

router.get('/food/:id', (req, res)=> {
  var id = req.params.id

  food.find(function(item){
    if (item.id == id) {
      res.render('foods/viewfood', item)
    }
  })
})

router.get('/addrecipe', (req, res) => {
  res.render('foods/newrecipe')
})

router.post('/addrecipe', (req, res)=> {
  var newId = (food.length + 1)
  var newSnack = {
    "id":newId,
    "recipe": req.body.recipe,
     "chef": req.body.chef,
    "food-pic": req.body.foodpic,
    "comment":req.body.comment
    }
  foodList.food.push(newSnack)
  fs.writeFile(__dirname + "/food.json", JSON.stringify(food), (err)=> {
    res.redirect('/food')
  })
})



module.exports = router
