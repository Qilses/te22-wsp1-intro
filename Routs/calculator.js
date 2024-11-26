import express, { query } from "express";

const router = express.Router()

router.get('/', (req, res) => {


    const {num1,num2} = req.query
    console.log(req.query)
    console.log(num1, num2)
    const sum = Number(num1) + Number(num2)
    console.log(sum)
    res.send(`summan av ${num1} och ${num2} är ${sum}`)
    res.render("/calculator",{
        title:"Calc",
        query,
    })    
})

export default router  