const axios = require('axios').default;


function sendSensorData(sensorId, unit) {

    const host = 'http://localhost:3000';
    const url = `${host}/sensors/${sensorId}`;
    let data = {
        unit,
        value: Math.floor(Math.random() * 100) + 1,
    };

    data.value = Math.floor(Math.random() * 100) + 1;
    console.log(`Data to be send: ${JSON.stringify(data)} from sensor ${sensorId}`)
    axios.post(url, data).then((response) => {
        console.log(response.data);
    }).catch((e) => {
        console.log(e);
    });

    setTimeout(()=>{
        sendSensorData(sensorId, unit)
    }, 2000);
}

exports.sendSensorData = sendSensorData;