const http = require('http');
const url = require('url');
const { fork } = require('child_process');
const { Subject } = require('rxjs');

const subject = new Subject();
subject.subscribe(processRequest);

http.createServer(onRequest)
    .listen(4000, () => console.log('Listening on 4000'));

function onRequest(req, res) {
    subject.next({req, res});
}

function processRequest(reqres) {
    const { req, res } = reqres;

    res.writeHead(200, { 'Content-Type': 'video/mp4' });

    const pathFilename = resolvePathfilename(req);

    createChildProcess(pathFilename, res);
}

function createChildProcess(pathFilename, res) {
    const childProcess = fork('stream_file.js');

    if (pathFilename) childProcess.send({ pathFilename });

    childProcess.on('message', data => {
        if (data === 'end') res.end();
        else if (data == 'error') res.end(data);
        else res.write(Buffer.from(data));
    });
}

function resolvePathfilename(req) {
    const myUrl = url.parse(req.url, true);
    return myUrl.query.url;
}