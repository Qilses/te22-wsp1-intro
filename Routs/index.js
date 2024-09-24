import express from "express"
//import  router  from "express"

const router = express.Router()

router.get("/test", (req,res) => {
    res.send("Det här är test router från en annan del. ")
    const name = req.query.name
    console.log(name)
});

//gamla servern
router.get('/', (req, res) => {
    res.render('index.njk',{
    message:"hello world",
    title: "Nunjucks hello world",
    
    })
})

router.get('/om', (req, res) => {
    res.render('om.njk',{
    message:"hello world",
    title: "Om",
    })
})

export default router






