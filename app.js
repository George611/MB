const express = require ('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/',function(req,res){
    res.send ('Mabelle')
})
app.get('/Food',function(req,res){
    var data = [
        {id:1, name:'Tawouk'},
        {id:2, name:'Burger'},
        {id:3, name:'Fries'},
        {id:4, name:'Crispy'},
    ]
    res.send (data)
})

app.listen(PORT)