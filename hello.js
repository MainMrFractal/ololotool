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
let protocol = arg[0].substring(0, arg[0].length -1) || null;
let body = process.argv[4] || null;


const options = {
    hostname:`${hostname}`,
    path: `/${path}`,
    method: `${method}`,
};

if (body) {
    options.body = `${body}`
}

// Sending the request
if (protocol === 'http') {
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
}
else {
    const req = https.request(options, (res) => {
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
}

