
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

´´´npm install nodemon -g
´´´

´´´npm install concurrently -g
´´´

0. Clone repo 

cd 1.b-code



1. Install dependencies in Cron Job

2. Install dependencies in Server

3. Install dependencies in Sensors

## How to Test with the console


1. Initalize Cron Job

2. Initialize Server

3. Initalize Sensors

### Tests

