import express from 'express'
import "dotenv/config" //intialisezes into the project and makes it global and available everywhere in project
const app = express();

const PORT=process.env.PORT || 8000

app.get('/', (req, res) =>{
    res.json({msg:"Hii"})
})

app.listen(PORT, (req, res) =>{
    console.log("Listening on Port: http://localhost:8000")
})