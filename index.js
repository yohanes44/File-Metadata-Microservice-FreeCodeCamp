var express = require('express');
require('dotenv').config()

var app = express();

const multer = require("multer");
const upload = multer();



const port = process.env.PORT || 3000;


app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/home.html');
});


app.get("/api/fileanalyse", (req, res)=>{

})


app.post("/api/fileanalyse", upload.single("upfile"), (req, res)=>{

  res.json({name: req.file.originalname, type: req.file.mimetype, size: req.file.encoding});
})




app.listen(port, function (){
  console.log('Your app is listening on port ' + port)
});
