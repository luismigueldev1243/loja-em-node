const express = require("express")
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())

let precos = {
    keyword:{
      "key":30511,
    },
    calças: {
        1: 45, 2: 59, 3: 67, 4: 78, 5: 49,
        6: 55, 7: 82, 8: 73, 9: 62, 10: 84,
        11: 68, 12: 51, 13: 74, 14: 80, 15: 69
    },
    tenis: {
        1: 120, 2: 135, 3: 145, 4: 110, 5: 160,
        6: 125, 7: 140, 8: 155, 9: 130, 10: 150,
        11: 115, 12: 165, 13: 175, 14: 140, 15: 135
    },
    camisas: {
        1: 25, 2: 30, 3: 27, 4: 35, 5: 28,
        6: 32, 7: 29, 8: 33, 9: 31, 10: 34,
        11: 26, 12: 30, 13: 27, 14: 28, 15: 32
    },
    bones: {
        1: 20, 2: 22, 3: 25, 4: 18, 5: 21,
        6: 19, 7: 23, 8: 24, 9: 20, 10: 22,
        11: 26, 12: 25, 13: 21, 14: 20, 15: 19
    },
    colares: {
        1: 35, 2: 40, 3: 38, 4: 37, 5: 39,
        6: 36, 7: 42, 8: 41, 9: 45, 10: 44,
        11: 43, 12: 37, 13: 38, 14: 39, 15: 36
    },
    intimos: {
        1: 15, 2: 18, 3: 17, 4: 14, 5: 16,
        6: 15, 7: 19, 8: 17, 9: 18, 10: 16,
        11: 14, 12: 19, 13: 15, 14: 17, 15: 18
    }
};

app.get("/precos",(req,res)=>{
    return res.json(precos)
})
app.post('/changeprice',(req,res)=>{
    const {ft,sn,num} = req.body
   
   precos[ft][sn] = num 
})


app.listen(3000,()=>{
    console.log('server is running')
})