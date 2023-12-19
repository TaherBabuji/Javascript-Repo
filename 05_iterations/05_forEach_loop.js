// forEach
// forEach method gives us a callback

const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((item) => {
//   console.log(item);
// });

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageExtension: "js",
  },
  {
    languageName: "Java",
    languageExtension: "java",
  },
  {
    languageName: "Python",
    languageExtension: "py",
  },
  {
    languageName: "C++",
    languageExtension: "cpp",
  },
];

// myCoding.forEach((item) => {
//   console.log(item.languageName);
// });


const values = coding.forEach((item) => { // 'for...each' method will never return a value
    console.log(item)
    return
})

console.log(values)
 
//So if we have to perform any operations on the values of the array or have to check values conditionally then we can use filter.