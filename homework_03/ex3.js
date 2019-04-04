const http = require('http');
const fs = require('fs');
const path = require('path');
const filename = 'IMG_5125.MOV';
const pathFilename = path.join(__dirname, filename);

// readFileSync
http.createServer((req, res) => {
    const data = fs.readFileSync(pathFilename);

    res.writeHead(200, { 'Content-Type': 'video/quicktime' });
    res.end(data);
}).listen(4001, () => console.log('listening on 4001'));


// readFile
http.createServer((req, res) => {
    fs.readFile(pathFilename, (err, data) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'video/quicktime' });
        res.end(data);
    });
}).listen(4002, () => console.log('listening on 4002'));


// Stream
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'video/quicktime' });

    fs.createReadStream(pathFilename)
        .pipe(res);
}).listen(4003, () => console.log('listening on 4003'));