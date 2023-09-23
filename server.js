const express = require('express');
const router = require('./Routes/routes');
const bodyParser = require('body-parser');
const cors = require("cors");
const MONGO_DB_CONNECTION = require('./config/db');
const app = express()
const port = 5000;


// MongoDb connection //
MONGO_DB_CONNECTION();

app.use(bodyParser.json({ limit: '150mb' }));

app.use(bodyParser.urlencoded({
  limit: '150mb',
  extended: true
}));


app.use(cors());


app.get('/', (req, res) => {
    res.json({
        msg: "Server is Running",
        status: true,
        app: "Crypto Tracker.",
        date: new Date()
    })
})



app.use("/api", router);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})