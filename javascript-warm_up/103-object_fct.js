#!/usr/bin/node
const myObject = {
    type: 'object',
    value: 12,
    incr: function(){
      myObject.value++;
    }
  };
  console.log(myObject);

//   my code starts here
// myObject.incr = function() {
//   myObject.value++;
    
//   }

myObject.incr();
  console.log(myObject);
 myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  