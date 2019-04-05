const os = require('os');
const { Subject } = require('rxjs');
const Observable$ = new Subject();

function checkSystem() {
    console.log('Checking your system...');

    const minRAM = 4;
    const minCPU = 2;
    const oneGB = Math.pow(2, 30);

    const memInGB = os.totalmem() / oneGB;
    const numCPU = os.cpus().length;

    if (memInGB < minRAM)
        Observable$.next('This app needs at least 4 GB of RAM');
    else if (numCPU < minCPU)
        Observable$.next('Processor is not supported');
    else
        Observable$.next('System is checked successfully');
}

Observable$.subscribe(msg => console.log(msg));

checkSystem();