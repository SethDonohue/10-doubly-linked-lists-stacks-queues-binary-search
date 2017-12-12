'use strict';

// let sampleArray = [
//   {id: 10, name = 'Demi'},
//   {id: 20, name = 'Sir Gregor'},
//   {id: 30, name = 'The Hound'},
// ]

// let binarySearch = (sortedObjectArray,id){

// };

// //Sample call
// binarySearch(sampleArray,30);

let binarySearch = (sortedObjectArray,id) => {
  let lowIndex = 0;
  let highIndex = sortedObjectArray.length -1;
  //--------------------------------------------
  let steps = 0;
  //--------------------------------------------

  while(lowIndex <= highIndex){
    //--------------------------------------------
    steps++;
    console.log(`Number of steps so far : ${steps}`);
    //--------------------------------------------

    let middleIndex = Math.floor((lowIndex + highIndex) / 2);
    let elementFound = sortedObjectArray[middleIndex].id;
    console.log(elementFound);
    
    if(elementFound < id){// vinicio - I need to go to the right
      lowIndex = middleIndex + 1;
    }else if(elementFound > id){ // vinicio - I need to go left
      highIndex = middleIndex -1;
    }else{
      return sortedObjectArray[middleIndex];
    } 
  }
  return -1;
};

// binarySearch(sampleArray,30);

// let binarySearch = (sortedArray,itemToFind) => {
//   let lowIndex = 0;
//   let highIndex = sortedArray.length -1;
//   //--------------------------------------------
//   let steps = 0;
//   //--------------------------------------------

//   while(lowIndex <= highIndex){
//     //--------------------------------------------
//     steps++;
//     console.log(`Number of steps so far : ${steps}`);
//     //--------------------------------------------

//     let middleIndex = Math.floor((lowIndex + highIndex) / 2);
//     let elementFound = sortedArray[middleIndex];
    
//     if(elementFound < itemToFind){// vinicio - I need to go to the right
//       lowIndex = middleIndex + 1;
//     }else if(elementFound > itemToFind){ // vinicio - I need to go left
//       highIndex = middleIndex -1;
//     }else{
//       return middleIndex;
//     } 
//   }
//   return -1;
// };

// vinicio - a different way of exporting
module.exports = binarySearch;