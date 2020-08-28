const cron = require('node-cron');
const MongoClient = require('mongodb').MongoClient;
const { Utils } = require('./utils');
const { S, M } = require('./configValues').configs // configs constants
const databaseUrl = 'mongodb://localhost:27017/sensors';


const getItems = async () => {

    const client = await MongoClient.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    const db = client.db('sensors');
    const items = await db.collection('sensors').find({ status: 'ready' }).sort({ created: 1 }).toArray();

    client.close();
    return items
}

const updateItems = async (ids) => {

    const client = await MongoClient.connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

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
        }).catch(error => {
            console.log(error);
        })
}

// scheduled to run every 30 seconds
cron.schedule('*/30 * * * * * ', () => {
    getItems().then((items) => {

        if (items.length > 0) {
            console.log(items.length + ' Items to be processed')
            const ids = items.map(function (item) {
                return item._id
            })
            const values = items.map(function (item) {
                return item.value
            })

            const averageBiggerThanM = Utils.checkAverageBiggerThan(values, M);
            averageBiggerThanM && console.log(`Alert! Average bigger that ${M}`)
            const differenceBiggerThatS = Utils.checkBiggerThanMinMaxDifference(values, S);
            averageBiggerThanM && console.log(`Alert! Difference bigger that ${S}`)
            updateItems(ids);
        } else {
            console.log('No data to process')
        }

    }).catch(error => {
        console.log(error)
    });
});









