
# Code Challange

## Problem Diagram
![Monitor System](diagrams/monitor-system.png)



## Specific Solution 
Basically we have the sensors sending data to the server. The server stores in the database and then a cron jobs process the data and made the calculations.

### Sensors

Each Sensor is a emulated with a NodeJS client sending data over HTTP to the server.

### Server

The Server is build in NodeJS with Express. Basically has an endpoint exposed to receive the data comming from the sensors and stores in a MongoDB database. 

### Scheduled Job

As stated, we have software constrains and we can process data only 2 times in a minute. So I took the desicion of using an scheduled Job using node-cron.

## Installation

 You must have installed :
 * NodeJS
 * MongoDB
 
 We need this Global Packages:

```
npm install nodemon -g
```

```
npm install concurrently -g
```

0. Clone repo 
```
git clone https://github.com/DamianMoralesM/atix-challenge.git
```
```
cd 1.b-code
```


1. Install dependencies in Cron Job
```
cd scheduled-job && npm install
```

2. Install dependencies in Server

```
cd server && npm install
```

3. Install dependencies in Sensors
```
cd sensors && npm install
```

## How to Test with the console


1. Initalize Cron Job
```
nodemon index
```

2. Initialize Server
```
nodemon index
```
3. Initalize Sensors

```
concurrenlty "sensor1.js" "sensor2.js" "sensor3.js" "sensor4.js"
```

### Tests

