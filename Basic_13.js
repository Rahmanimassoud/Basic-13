// BASIC 13 FROM ALGO BOOK========================================================

//CHALLENGE 1 PRINT 1-255, print all the integers from 1 to 255.

// the bellow code is one way of writing it using functional programing.

// function print1to255(){ //we are going to use a while loop for this challenge.
//     let num = 1; //step 1, initialize a variable with starting value of 1.
//     while (num <= 255){ //step 2, start the while loop and set it to run as long as num is less than or equal to our num. 
//         console.log(num); //step 3, print the num in every iteration of the loop.
//         num++; // step 4, increment num by 1 each time the loop runs.
//     }

// }
// print1to255();

// we can print the numbers simply by just a for loop, but the accurate way is functional programing for reusability.
// for(let i = 1; i <= 255; i++){
//     console.log(i);
// }

// CHALLENGE 2 PRINT SUM, write a function that prints the sum of all the numbers from 0 to 255.

// function sumOf0to255(){
//     //step 1, declare a variable that can hold our sum.
//     let sum = 0; //the value starts with zero.
//     //step 2, we need a for loop to go over each number.
//     for (let num = 0; num <= 255; num++){
//         //step 3, we need to sum our value with what ever value we get from variable num.
//         sum = sum + num;
//         console.log("New number: ", num, "Sum is: ", sum);
//     }
// }
// sumOf0to255();

// CHALLENGE 3 FIND MAX, write a function which that prints the largest number/maximum number in a given array.

// function printArrayMax(arr){
//     //in order to make sure that we consider the edge cases, we can write an if check to make sure it's not printing 0 if it's the only value that we have in the array. we don't need the if check but it's good to have it.
//     if (arr.length === 0){
//         console.log("Empty array, no maximum value")
//         return;
//     }
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     console.log("Max value is: ", max);
// }
// printArrayMax([1,3,8,10]);


// CHALLENGE 4 PRINT ODDS, write a function that prints the odd numbers from 1-255.

//we can do this in couple ways. The first way is using a for loop.
// function printOdd(){
//     for (let i = 1; i <= 255; i++ ){
//         if (i % 2 !== 0){
//             console.log(i);
//         }
//     }
// }
// printOdd();

//second way is using a while loop.
// function printOdd1to255(){
//     let num = 1;
//     while (num <= 255){
//         console.log(num);
//         num = num + 2; //2 + 1 is going to gave us only the odd numbers.
//     }
// }
// printOdd1to255();

//and we can do this using simply a for loop, not using a function.
// for (let i = 1; i <= 255; i++){
//     if (i % 2 !==0){
//         console.log(i);
//     }
// }

// CHALLENGE 5 ITERATE AN ARRAY, write a function that prints all the values in a given array.
// function printArray(arr){
//     for (let i = 0; i <= arr.length; i++){
//         console.log("array at index[", i, "] is equal to ", arr[i]);
//     }
// }
// printArray([1,2,3,4,5,6]);

// CHALLENGE 6 PRINT AVERAGE, analyze an array's values and print the average number in the array.
// function findAvg(arr){
//     // we need to make sure that the function is not going to print anything, if the array empty.
//     if (arr.length == 0){
//         console.log("Empty array");
//         return;
//     }
//     // // to find the average of an array, we need to first find the sum of the array and after that divide the sum to the array length.
//     let sum = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         sum = sum+arr[i];
//     }
//     return sum/arr.length; //dividing the sum of the array to the array length.
// }
// let ave = findAvg([0,1,2,3,5]); //storing the function return into a variable. 
// console.log(ave);

// CHALLENGE 7 PRINT ODDS, create an array of odd integers from 1 to 255

// function oddArray1to255(){
//     //step 1, initialize a variable to store the values.
//     let oddArray = [];
//     //step 2, loop throug the numbers from 1 to 255
//     for(let i = 1; i <= 255; i++){
//         //step 3, check to see if the number is even or odd.
//         if(i % 2 !== 0){
//             //step 4, push the value of i, if it's what we are looking for to the empty array.
//             oddArray.push(i);
//         }
//     }
//     //step 5, return the empty array, which now filled with the numbers that we are looking for.
//     return oddArray;
// }
// //step 6, store the function in a variable, which also calls the function.
// let dojo = oddArray1to255();
// //step 7, log the information.
// console.log(dojo);


// CHALLENGE 8,GREATER THAN Y, write a function that takes an array and print the values greater than y.
// function numGreaterThanY(arr, y){
//     let num = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > y){
//             num++
//         }
//     }
//     console.log("%d values are greater than %d", num, y)
// }
// numGreaterThanY([1,2,3,4,6], 1)

// CHALLENGE 9, Max, Min, Avg given an array print min, max and avg values.

// function maxMinAvg(arr){
//     if (arr.length == 0){
//         console.log("Null arr, no min/max/avg");
//         return;
//     }

//     let min = arr[0];
//     let max = arr[0];
//     let sum = arr[0];
//     for (let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//         if (arr[i] > max){
//             max = arr[i];
//         }
//         sum += arr[i];
//     }
//     console.log("max:", max, " Min:", min);
//     console.log("Avg value:", sum / arr.length);
// }
// maxMinAvg([1,2,3,4,5,6,7,9])

// CHALLENGE10, Square the Values,write a function that replaces each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

// function squareVal(arr){
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * arr[i];
//     }
//     return arr;
// }
// console.log(squareVal([1,2,3,4,5]))

// CHALLENGE 11, Zero out Negative numbers. Write a function which sets the negative array value to zero.

// function setNegativeToZero(arr){
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = 0;
//         }
//     }
//     return arr;
// }
// console.log(setNegativeToZero([-1,3,5,-10]))


// CHALLENGE 12, Swap String for Array Negative values, Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

// function numToStr(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             arr[i] = "Dojo"
//         }
//     }
//     return arr;
// }
// console.log(numToStr([-1,2,4]));

// CHALLENGE 13, Shift array values 

// function arrShift(arr){
//     for (let i = 1; i < arr.length; i++){
//         arr[i - 1] = arr[i];
//     }
//     arr[arr.length - 1] = 0;
//     return arr;
// }
// console.log(arrShift([-1,2,3,0,4]))