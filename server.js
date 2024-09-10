import express from 'express'

import nunjucks from 'nunjucks'
//constant gör något hela tiden slutar aldig
const app = express() 
// lyssna på GET compost på websystem
nunjucks.configure('views', {
autoscape: true,
express:app,
//Detta ska bara vara       
})

app.use(express.static("public"))   
//app.use läser in statisca filer

app.get('/', (req, res) => {
    res.render('index.njk',{
    message:"hello world",
    title: "Nunjucks hello world",
    })
})

app.get('/om', (req, res) => {
    res.render('om.njk',{
    message:"hello world",
    title: "Om",
    })
})

app.listen(3000, () => (
    console.log('server is running on http://localhost:3000')

))

/*
const PORT = process.env.PORT || 3000
app.    listen(port,() =>{
    console.log('server is running on http://localhost:3000')
}) 
*/



/*console.log("req")
res.static(500).sendfile('HEJSAN :D')
console.log("res")
res.json(message: "HEllo world") */