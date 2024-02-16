// function log(msg) {
//   console.log(msg);
// }

// // function log1(msg) {
// //   log(msg);
// // }

// // function log2(msg) {
// //   log1(msg);
// // }

// // function log3(msg) {
// //   log2(msg);
// // }

// log('Test');

// setTimeout(() => {
//   console.log('empty timeout');
// }, 0);

// setTimeout(() => {
//   console.log('timeout');
// }, 1000);

// new Promise((resolve, reject) => {
//   console.log('promise');
//   resolve('resolve');
// })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       resolve('resolve promise');
//     })
//   })
//   .then((result) => {
//     console.log(result);
//   })

// new Promise((resolve, reject) => {
//   console.log('promise 1');
//   resolve('resolve 1');
// })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       resolve('resolve promise 1');
//     })
//   })
//   .then((result) => {
//     console.log(result);
//   })

// log(4);

const promise = new Promise((resolve, reject) => {
  resolve('Data loaded successfully');
});

promise.then((data) => {
  console.log(data + '1');

  return Promise.resolve('Additional data 1');
}).then((additionalData) => {
  console.log(additionalData);
});

promise.then((data) => {
  console.log(data + '2');

  return Promise.resolve('Additional data 2');
}).then((additionalData) => {
  console.log(additionalData);
});