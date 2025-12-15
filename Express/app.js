const express = require('express');
const app = express();
const cors = require('cors')

//mydomain.com

app.use(cors())



app.get("/", function(req, res) {
    res.send("its changed")
})

app.get("/user/:username", function(req, res) {
    res.send(req.params.username)
})

// app.use(
//     expressSession({
//         secret: "kuch bhi",
//         resave: false,
//         saveUnitialised: false
//     })
// )

// app.use(function(req, res, next){
//     console.log('task performed')
//     next()
// })

// app.use(function(req, res, next){
//     console.log('task2 performed')
//     next()
// })

// app.get("/create-user", function(req, res) {
//     res.send("User Created")
// })

// app.get("/create-session", function(req, res) {
//     res.session.bool = true
//     res.send("Session Created")
// })


// app.get("*", function(req, res) {
//     res.send("User Created")
// })

// put, patch, delete

//middlewares

//cors

app.listen(3000)