import express, { Router } from "express";

const router = express.Router()



router.get("/", (req, res) => {
    const query = req.query.q || ""
    console.log(query)
    const names = ["Bob", "Bill","Bengt","Billy"]
    const filteredNames = names.filter((name) => 
        name.toLocaleLowerCase().includes(query.toLowerCase()))
    res.render("search.njk",{
        title:"Search",
        query,
        names: filteredNames, 
    })    
})
export default router