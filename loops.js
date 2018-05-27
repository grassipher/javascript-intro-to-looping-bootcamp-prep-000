function forLoop(array){
    for (var i = 0; i <25; i++ ){
      if (i === 1){
        array.shift("I am 1 strange loop.");
      } else {
        array.shift("I am ${i} strange loops.");
      }
    }
}