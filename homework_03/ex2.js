const EventEmitter = require('events');

class Gym extends EventEmitter {
    constructor() {
        super();
        this.message = 'Athlete is working out';
    }

    boom() {
        setInterval(() => {
            this.emit('boom', this.message);
        }, 1000);
    }
}

const gym = new Gym();
gym.on('boom', (msg) => console.log(msg));
gym.boom();