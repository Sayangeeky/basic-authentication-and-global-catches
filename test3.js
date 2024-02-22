const express = require('express')
const app = express()



// app.get("/health-checkup", (req, res) => {
//     const userName = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if(userName === "Sayan" && password === "pass"){
//        if(kidneyId == 1 || kidneyId == 2){
//         res.json({
//             msg: "Your kiddney is fine"
//         })
//        }
//     }
//     res.status(400).json({
//         msg: "something is up with your inputs"
//     })
// })

app.use(express.json())

app.get('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys
    const length = kidneys.length
    res.send(`You have ${length} kidneys`)
})

//global catches

app.use((err, req, res, next) => {
    // errorCounter++
    res.json({
        msg: "Not a valid input"
    })
})

app.listen(3003);

//middlewares just make a function with the parameters req res next or use app.use() and do the logic there and call it in the app.get or whereever neede



