import express from 'express'
import nunjucks from 'nunjucks'
import morgan from "morgan"
import indexRouter from './Routs/index.js'
import searchRouter from './Routs/search.js'
import calculatorRouter from './Routs/calculator.js'
//constant gör något hela tiden slutar aldig
// lyssna på GET compost på websystem
const app = express() 

nunjucks.configure('views', { //Detta ska bara vara   
autoescape: true,
express:app,
})
//app.use läser in statisca filer
app.use('/', indexRouter)
app.use(express.static("public"))  
app.use(morgan("dev"))
app.use('/search', searchRouter)
app.use('/calculator', calculatorRouter)
app.set('view engine', 'njk');

app.use ((req, res) => {
//res.status(404).send('404 - not found')
res.status(404).render('404.njk', {  
      title: '404  not found' ,
    })
})

app.listen(3000, () => {
    console.log('server is running on http://localhost:3000')

})

/*
const PORT = process.env.PORT || 3000
app.listen(3000, () => (
    console.log('server is running on http://localhost:3000')
} */



/*console.log("req")
res.static(500).sendfile('HEJSAN :D')
console.log("res")
res.json(message: "HEllo world") */