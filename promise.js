// const PENDING = 'pending';
// const REJECTED = 'rejected';
// const FULFILLED = 'fulfilled';

// class MyPromise {
//     constructor(executor) {
//         this.status = PENDING;
//         this.result = undefined;

//         const resolve = (result) => {
//             if (this.status === PENDING) {
//                 this.result = result;
//                 this.status = FULFILLED;
//             }
//         }

//         const reject = (error) => {
//             if (this.status === PENDING) {
//                 this.result = error;
//                 this.status = REJECTED;
//             }
//         }

//         try {
//             executor(resolve, reject);
//         } catch (error) {
//             resolve(error);
//         }
//     }

//     then(onFulfilled, onRejected) {
//         if (onFulfilled && this.status === FULFILLED) {
//             onFulfilled(this.result);
//         }

//         if (onRejected && this.status === REJECTED) {
//             onFulfilled(this.result);
//         }
//     }
// }

// console.log(1)
// const promise = new MyPromise((resolve, reject) => {
//     console.log(2)
//     // setTimeout(() => resolve(2), 1000);
//     // setTimeout(() => reject(3), 1000);
//     resolve(4);
// })

// promise.then(
//     (result) => {
//         console.log({ result });
//     },
//     () => { }
// );
// console.log(3);
// console.log(promise);
// setTimeout(() => {
//     console.log(promise);
// }, 1500)


let i = 0;

const performComplexOperation = () => {
    do  {
        i++;
    } while (i % 1e3 !== 0);

    if (i === 1e6) {
        console.log('done');
    } else {
        console.log(i);
        setTimeout(performComplexOperation);
    }
}

// Profiling with browser developer tools:
console.profile("Performance Analysis");
performComplexOperation();
console.profileEnd();