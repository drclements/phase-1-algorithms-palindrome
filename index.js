function isPalindrome(word) {
  let stringLen = word.length

  for (let i = 0; i < stringLen/2; i++) {
    if (word[i] !== word[stringLen -1 - i])
      return false
    } 
  return true
}

/* 
  invoke isPalindrom function

  pass in string argument
  iterate over each elements

  if elements match on both beginning and end of array
    move in and recheck next elements.
    if ements do not match return false

    if elements match 
      return true
*/

/*
  I set a variable stringLen to equal the string (word) length. Next I wrote a for if statement
  first setting the conditions i = 0, i < stringLen/2 (cuts the length in two), i incriments.

  If the first letter of the string does not equeal the last letter of the string exit loop and return
  false.

  If letters match, continue through loop until stringLen is no longer divisible by two.
  If the we reach the end of the loop return True.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true"),
  console.log("=>", isPalindrome("bob"))

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("expecting:false")
  console.log("=>", isPalindrome('daniel'))
}

module.exports = isPalindrome;
