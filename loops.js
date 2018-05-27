function forLoop(array){
    for (var i = 0; i <25; i++ ){
      if (i === 1){
        array[i]=("I am 1 strange loop.");
      } else {
        array[i]=("I am ${i} strange loops.");
      }
    }
    return array;
}
function whileLoop(n){
  while(n>0){
    console.log(--n);
  }
  return "done";
}
function doWhileLoop(array){
  var i = 1;
  do {
    delete array[array.length - i];
    i++;  
  } while (array.length > 0 && maybeTrue());
}
function maybeTrue(){
  return Math.random() >= 0.5;
}