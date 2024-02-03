function log(...args) {
    console.log(...args);
}

log(1);

setTimeout(() => {
    log('timeout');
}, 0);

new Promise((resolve, reject) => {
    console.log('before resolve');
    resolve(1)
}).then((result) => {
    log('microtask', result);
});

console.log(4);