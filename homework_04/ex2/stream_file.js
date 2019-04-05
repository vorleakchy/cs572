const fs = require('fs');

function streamFile(pathFilename) {
    const stream = fs.createReadStream(pathFilename)

    stream.on('data', data => process.send(data));

    stream.on('error', err => process.send(err));

    stream.on('end', () => endProcess());
}

function endProcess(msg = 'end') {
    process.send(msg);
    process.exit();
}

process.on('message', (data) => {
    if (data.pathFilename) streamFile(data.pathFilename);
    else endProcess();
});