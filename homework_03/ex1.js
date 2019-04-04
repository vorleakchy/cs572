const dns = require('dns');
const { promisify } = require('util');
const resolvePromise = promisify(dns.resolve4);

// Callback
dns.resolve4('www.mum.edu', (err, addresses) => {
    if (err) throw err;
    console.log(addresses);
});


// Convert callback to promise
resolvePromise('www.mum.edu')
    .then(addresses => console.log(addresses))
    .catch(err => console.log(err));


// Convert promise to async/await
async function resolveAsync(domain) {
    try {
        const addresses = await resolvePromise(domain);
        console.log(addresses);
    } catch (err) {
        console.log(err);
    }
};
resolveAsync('www.mum.edu');

