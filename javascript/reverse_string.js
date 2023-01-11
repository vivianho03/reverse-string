function reverseString(str) {
  // create a variable that intakes an empty string
  let result = "";
  // loop through this string from the end to the beginning
  for (let i = str.length - 1; i >=0; i -= 1){
    result += str[i];
  }
  // return the result
  return result;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// And a written explanation of your solution
//I want to create a loop that grabs each index of the string from the back-end and add it to the the previous letter which creates a reversed string
