function iterativeLog(arr){
  arr.forEach((element, index) => {
      console.log(`${index}: ${element}`);

  });

}

function iterate(callback) {
  var arr = ['stuff', 'thing']
  arr.forEach(callback);
  return arr;
}

function doToArray(arr, callback){
  arr.forEach(callback);
}
