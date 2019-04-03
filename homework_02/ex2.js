Array.prototype.even = function() {
    process.nextTick(() => {
        const array = this.filter(i => i%2 == 0);
        console.log(array);
    });
};

Array.prototype.odd = function() {
    queueMicrotask(() => {
        const array = this.filter(i => i%2 != 0);
        console.log(array);
    });
};

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');