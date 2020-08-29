const axios = require('axios').default;

function sendSensorData(sensorId) {

    const host = 'http://localhost:3000';
    const url = `${host}/sensors/${sensorId}`;
    // random between 1 and 100
    let data = {
        value: Math.floor(Math.random() * 100) + 1,
    };

    console.log(`Data to be send: ${JSON.stringify(data)} from sensor ${sensorId}`)
    axios.post(url, data).then((response) => {
        console.log(response.data);
    }).catch((e) => {
        console.log(e);
    });

    setTimeout(()=>{
        sendSensorData(sensorId)
    }, 2000);
}

exports.sendSensorData = sendSensorData;