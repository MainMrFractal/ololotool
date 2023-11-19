// console.log("hello" ,process.argv[2]);
// Importing https module
const http = require('http');
const https = require('https');

// Setting the configuration for
// the request
let arg = process.argv[3].split("/");
let hostname = arg[2];
let path = arg[3];
let method = process.argv[2] || 'GET';

const options = {
    hostname:`${hostname}`,
    path: `/${path}`,
    method: `${method}`
};

console.log('method', method);
// Sending the request
const req = http.request(options, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data += chunk;
    });

    // Ending the response
    res.on('end', () => {
        console.log('Body:', data)
    });

}).on("error", (err) => {
    console.log("Error: ", err)
}).end()
