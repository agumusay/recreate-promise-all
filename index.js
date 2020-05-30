let all = arr => {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    if (!arr || !arr.length) {
      reject("error");
    }
    arr.forEach((value, index) => {
      Promise.resolve(value)
        .then(result => {
          results[index] = result;
          completed += 1;
          if (completed == arr.length) {
            resolve(results);
          }
        })
        .catch(e => {
          reject(`error ${e}`);
        });
    });
  });
};

const p1 = new Promise((resolve, reject) => {
  // eslint-disable-line no-unused-vars
  setTimeout(() => {
    resolve("Promise-1");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  // eslint-disable-line no-unused-vars
  setTimeout(() => {
    resolve("Promise-2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  // eslint-disable-line no-unused-vars
  setTimeout(() => {
    resolve("Promise-3");
  }, 3000);
});

all([p1, p2, p3])
  .then(values => {
    console.log(values);
  })
  .catch(err => {
    console.log(err);
  });
// all([])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });
