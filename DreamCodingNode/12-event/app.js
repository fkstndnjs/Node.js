const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('lucas', (args)=>{
    console.log('first callback - ', args);
});

emitter.on('lucas', (args)=>{
    console.log('second callback - ', args);
});

emitter.emit('lucas', {message: 1});

emitter.emit('lucas', {message: 2});

emitter.emit('lucas', {message: 3});
