#!/usr/bin/env node
'use strict';

var port;
var hostip;
var meterid;
var meterno;
var meterip;
var meterport;
var fs = require('fs');
var sleep = require('sleep');

console.log('File Read Start\n');
//fc.readFile('./config.json', 'utf8', onFileRead);
var currentPackage = JSON.parse(fs.readFileSync('config.json', 'utf8'));
//console.log('END!!!');
//function onFileRead(err, data) {
    console.log('Reading the File!!!!');
  //  if (err) throw err;
    //var currentPackage = JSON.parse(data);
    //console.log(currentPackage);
    //console.log(currentPackage.HOSTAddress);
    hostip = currentPackage.HOSTAddress;
    port = currentPackage.PORT;
    meterid = currentPackage.MeterID;
        meterno = currentPackage.MeterNo;
        meterport = currentPackage.MeterPort;
        meterip = currentPackage.MeterIP;
    console.log(port);
    console.log(hostip);
    console.log(meterid);
    console.log(meterno);





var net = require('net');
var https = require('https');
var url = require('url');
var moment = require('moment');
var readline = require('readline');



var client = new net.Socket();
var i = 0;
var meter = 0;
var j = 0;
var voltagel1 = 0;
var voltagel2 = 0;
var voltagel3 = 0;
var start = 0;
var end = 0;
var lat = 0;
var ack = new Buffer(7);
var re = new Buffer(13);
var l1 = new Buffer(13);
var l2 = new Buffer(13);
var l3 = new Buffer(13);

//meter command for ACK
ack[0] = 0x06;
ack[1] = 0x30;
ack[2] = 0x35;
ack[3] = 0x31;
ack[4] = 0x0d;
ack[5] = 0x0a;
//meter command for mode
re[0] = 0x01;
re[1] = 0x52;
re[2] = 0x31;
re[3] = 0x02;
re[4] = 0x31;
re[5] = 0x2e;
re[6] = 0x34;
re[7] = 0x2e;
re[8] = 0x30;
re[9] = 0x28;
re[10] = 0x29;
re[11] = 0x03;
re[12] = 0x56;
//meter command for L1
l1[0] = 0x01;
l1[1] = 0x52;
l1[2] = 0x31;
l1[3] = 0x02;
l1[4] = 0x33;
l1[5] = 0x32;
l1[6] = 0x2e;
l1[7] = 0x32;
l1[8] = 0x35;
l1[9] = 0x28;
l1[10] = 0x29;
l1[11] = 0x03;
l1[12] = 0x4b;
//meter command for L2
l2[0] = 0x01;
l2[1] = 0x52;
l2[2] = 0x31;
l2[3] = 0x02;
l2[4] = 0x35;
l2[5] = 0x32;
l2[6] = 0x2e;
l2[7] = 0x32;
l2[8] = 0x35;
l2[9] = 0x28;
l2[10] = 0x29;
l2[11] = 0x03;
l2[12] = 0x4d;

//meter command for L3
l3[0] = 0x01;
l3[1] = 0x52;
l3[2] = 0x31;
l3[3] = 0x02;
l3[4] = 0x37;
l3[5] = 0x32;
l3[6] = 0x2e;
l3[7] = 0x32;
l3[8] = 0x35;
l3[9] = 0x28;
l3[10] = 0x29;
l3[11] = 0x03;
l3[12] = 0x4f;

//const port = 1224;
const hostname = 'subh@gmail.com';
const tls = require('tls');
var fs = require('fs');
var voltage = '240';

console.log('\nWelcome to the Ericsson Smart Grid Proxy Server App\n');

const options = {
  host: hostip,
  port: port,
  rejectUnauthorized: false,
  // Necessary only if using the client certificate authentication
  key: fs.readFileSync('certs/client/client.key'),
  cert: fs.readFileSync('certs/client/client.crt'),

  // Necessary only if the server uses the self-signed certificate
  ca: fs.readFileSync('certs/ca/ca.crt')
};

var conn = tls.connect(options, function() {
  if (conn.authorized) {
    console.log("Connection authorized by a Certificate Authority.");
  } else {
    console.log("Connection not authorized: " + conn.authorizationError)
  }
    console.log();
        client.connect(meterport, meterip, function () {
        console.log('Connected To Server');
        client.write(meterid);
		sleep.sleep(2);
    });
   
});

conn.on("data", function (data) {
  var ss =data.toString();
  if(ss!='Hello!!\n')
    {
      console.log(data.toString());
    }

});

conn.on('end', () => {
  console.log("End connection");
});

conn.on('error', (err) => {
  throw err;
});

client.on('data', function(data) {
    meter= meter + data;
    if(i==2 && j==1)
    {
        end = moment().valueOf();
        lat = end - start;
        lat = lat-20;
        j--;
        conn.write(meterno+'.Latency:'+lat);
    }
    if(i==0)
    {
        
            console.log('\nMeter ID:'+meter);
            i++;
            meter=0;
            client.write(ack);
			sleep.sleep(2);
        
    }
    else if(i==1)
    {
        
            client.write(l1);
            i++;
            meter=0;
        

    }
    else if (i==2)
        {

            var ind2 = meter.indexOf("V");
            if(ind2!=-1)
            {
                var indl1 = meter.indexOf("(");
                if(indl1!=-1)
                {
                    var it1 = indl1+1;
                    var sul1 = meter.indexOf("V");
                    var endl1 = sul1-1;
                    //var bel1 = indl1 + 6;
                    var slisedl1 = meter.slice(it1,endl1);
                    voltagel1= slisedl1;
                    conn.write(meterno+'.VoltageL1:'+voltagel1);
                    meter=0;
                    j++;
                    start = moment().valueOf();
                    client.write(l1);
                }

            }

        }
        else
        {
          i=0;
          meter=0;
        }
    });
  client.on('close', function() {
        console.log('Connection to meter is closed\n');
		conn.end();
    });

    client.on('error', function() {
        console.log('ERROR!!!!\n');
		conn.end();
    });

                                          
