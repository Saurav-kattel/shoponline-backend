const connectToMongoo=require('./db');
const express = require('express')
var cors=require("cors");

connectToMongoo();
const app = express()
const port = 5000


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}));
const admin=require("./routes/Admin")
app.use('/api/admin',admin)
app.use('/uploads', express.static('uploads'));


app.listen(port, () => {
  console.log(`inotebook backend listening on port http://localhost:${port}`)
})