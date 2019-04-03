1. setImmediate will add to check phase and doesn't wait in libuv 
and setTimeout will wait in libuv and add to timer phase after that.

2. process.nextTick will add to nextTick queue which is the most priority to run first
and setImmediate will add to check phase and add to call stack when it's empty

3. Name 10 core modules that Node provides by default:
- buffer
- dns
- events
- fs
- http
- net
- os
- path
- url
- util