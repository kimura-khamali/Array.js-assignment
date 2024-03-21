// Find the last element of the following arrays.arr1 = [3,7,34,90,12]arr2 = [true, "green", "where",12,56]
arr1 = [3,7,34,90,12]
arr2 = [true, "green", "where",12,56]

console.log(arr1[4]);
console.log(arr2[4]);
// Write a JS program that will join the following array elements into a stringmyPets = ["Cow", "Bird", "Snake", "Dog"];
myPets = ["Cow", "Bird", "Snake", "Dog"];
console.log(myPets.join())
// Write a JS script to sort the following array itemsvar arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort()
console.log({arr3})
// Write a program to remove duplicates from the following array.Console the array without duplicates, and console another array that only contains the duplicates
// let arr = ["boy", "man", "girl",            "school", "girl", "woman"];
//let arr = ["boy", "man", "girl",            "school", "girl", "woman"];

 //let result= arr.filter(item => item)
 

// Write a JS script to search for the following word in the array."food"If the word is present, return it else return "the search word was not found"let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];

let  item= `food`;
let search = arr5.includes(item);

if (search) {
  console.log(`${item}`);
} else {
  console.log(`the search was not found`);
}


// Write a JS script to sort the following string:let word = "renniw"
let word = "renniw"
let word1 = word.split("").sort().join();
console.log(word1);

//Using an array of fruits with length 10 , insert 'Tomato' at the 5th index 

let fruits = [ 'Kiwi', `banana`, 'Oranges', 'Mango', 'Pear' ,`Avocado`,`Blueberry`,`Grapes`,`Apple`,`Watermelon`];

let fruit = fruits.slice(0,4) + `Tomato`+ fruits.slice(4);
console.log({fruit}); 
