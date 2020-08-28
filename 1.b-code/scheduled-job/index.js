const cron = require('node-cron');
const MongoClient = require('mongodb').MongoClient;
const { Utils } = require('./utils');
const { S, M } = require('./configValues').configs


const getItems = async () => {
    // connect to your cluster
    const client = await MongoClient.connect('mongodb://localhost:27017/sensors', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // specify the DB's name
    const db = client.db('sensors');
    // execute find query
    const items = await db.collection('sensors').find({ status: 'ready' }).sort({ created: 1 }).toArray();

    client.close();
    return items
    // close connection

}

const updateItems = async (ids) => {
    // connect to your cluster
    const client = await MongoClient.connect('mongodb://localhost:27017/sensors', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // specify the DB's name
    const db = client.db('sensors');
    db.collection('sensors').updateMany(
        {
            _id:
            {
                $in: ids
            }
        },
        {
            $set: { status: "processed" }

        }).then(() => {
            console.log('Items Updated')
            client.close();
        })
}

getItems().then((items) => {

    const ids = items.map(function (item) {
        return item._id
    })
    const values = items.map(function (item) {
        return item.value
    })
    console.log(ids)
    Utils.checkAverageBiggerThan(values, S);
    Utils.checkBiggerThanMinMaxDifference(ids, M);
    updateItems(ids)
}).catch(error=>{
    console.log(error)
});








