const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())

app.use(cors());
const port = process.env.PORT || 3000;



app.post('/sensors/:id', function (req, res) {

    

    const value = req.body.value;
    const status = 'ready';
    const sensorId = req.params.id;
    const created = new Date;
    const recordToBeStored = {
        sensorId,
        value,
        status,
        created
    }

    console.log(`Data recieved: ${JSON.stringify(recordToBeStored)}`);



    MongoClient.connect("mongodb://localhost:27017/sensors", { useNewUrlParser: true }, function (err, db) {

        db.db("sensors").collection('sensors', function (err, collection) {

            collection.insertOne(
                recordToBeStored
            ).then(result =>{
                console.log('Record Inserted: ' + result.insertedId)
            }).catch((error)=>{
                console.log(error)
            })

            db.close();
            res.send('ok')

        });

    });


})

app.get('/', (req, res) => {



})


app.listen(port, () => {
    console.log(`API REST running`)
})