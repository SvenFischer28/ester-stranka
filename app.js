const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');

app.use(express.static("public"));




app.get("/", (req,res)=>{
    res.sendFile(__dirname + ("/public/imgs/index.html"));
})
app.listen(PORT, function (req, res) {
    console.log("app is running on port 3000")
})