const experss = require('express')
const app = experss()
const PORT = 4000

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT}`)
})

app.get('/',(req,res) =>{
    res.send(`This is my API runing...`)
})

app.get('/about',(req,res) =>{
    res.send(`This is mt route`)
})

module.export = app