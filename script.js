// 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

var Student = {
    name: "David",
    sclass: "11th",
    roll_no: "69",
};

console.log(Student.name);
console.log(Student.sclass);
console.log(Student.roll_no);

// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

delete Student.roll_no;
console.log(David);

// 3. Write a JavaScript program to get the length of a JavaScript object.  Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };

let count=0;
for(let item in student){
    count++;
}
console.log(count);

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
    { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
    { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

library.forEach((reader) => {
    console.log(reader.author);
    console.log(reader.title);
    console.log(reader.readingStatus);
});

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder. Try To Attempt : Difficult Level Increased

const PI = Math.PI;
let r = 5.45;
let h = 7.9;
let volume = PI * r * r * h;
console.log(volume.toFixed(4));

// 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : 

var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
library.sort((a, b) => (a.libraryID > b.libraryID) ? -1 : 1);
for(let item in library){
  console.log(library[item].title+" "+library[item].author+" "+library[item].libraryID);
}