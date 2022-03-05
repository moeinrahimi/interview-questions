function processAction(i, callback) {
  setTimeout(function () {
    if (callback) callback("Processed Action " + i);
  }, Math.random() * 5000);
}
processAction(10, (result) => {
  console.log(result);
});

//function to code
function triggerActions(count) {
   
}

// triggerActions(10);
