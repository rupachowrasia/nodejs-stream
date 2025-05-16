const express = require('express');
const fs = require('fs');
const status = require('express-status-monitor');

const app = express();
app.use(status());

const PORT = process.env.PORT || 8080; 

//Readable stream
// const readable = fs.createReadStream('./sample.txt', {highWaterMark: 30});
// readable.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

// Writable stream
// const writable = fs.createWriteStream('new-sample.txt');
// writable.write('hello, ');
// writable.write('world');

// Duplex stream and Transform stream
const { Transform, pipeline } = require('stream');
const readable1 = fs.createReadStream('./sample.txt', {highWaterMark: 30});
const writable1 = fs.createWriteStream('new-sample.txt');

const uppercase = new Transform({
    transform(chunk, encoding, callback){
        callback(null, chunk.toString().toUpperCase());
    }
});

//readable1.pipe(uppercase).pipe(writable1);
pipeline(readable1, uppercase, writable1, (err) => {
    if(err) console.log(err);
});


app.listen(PORT, () =>{
    console.log(`App is listening on port:${PORT}`);
})