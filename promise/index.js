const statuses = {
  pending: 'PENDING',
  fulfilled: 'FULFILLED',
  rejected: 'REJECTED',
};

class MyPromise {
  thenFn = () => {};
  catchFn = () => {};
  state;

  constructor(executor) {
    this.state = statuses.pending;
    return executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(data) {
    if (this.state === statuses.pending) {
      this.state = statuses.fulfilled;
      setTimeout(() => {
        return this.thenFn(data);
      }, 0);
    }
  }

  reject(err) {
    if (this.state === statuses.pending) {
      this.state = statuses.rejected;
      setTimeout(() => {
        return this.catchFn(err);
      }, 0);
    }
  }

  then(onResolved, onRejected) {
    if (onResolved) {
      this.thenFn = onResolved;
    }
    if (onRejected) {
      this.catchFn = onRejected;
    }

    return this;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

const promiseTimeout = new MyPromise((resolve, reject) => {
  console.log("Time is start");
  setTimeout(() => {
    resolve("Time is over");
    reject(new Error('error'));
  }, 1000);
})

promiseTimeout
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message ?? error);
  });