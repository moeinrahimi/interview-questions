function sleepCallback(callback) {
  setTimeout(function () {
    if (callback) callback('sleep done');
  }, 1000);
}

sleepCallback(function (result) {
  console.log(result);
});

function sleepPromise() {
  // make sleepCallback a promise
}
