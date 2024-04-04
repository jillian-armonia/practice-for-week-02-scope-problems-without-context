/***********************************************************************
Write a function named interrupter that accepts a single parameter `interruptingWord`:
  `interrupter(interruptingWord)`
The interrupter function should return a function.
When the function returned by interrupter is called with a sentence,
the sentence will be returned with the original interruptingWord inserted
between each word in the sentence.

Look below to see how this function is invoked:
let rudePerson = interrupter("what"); // => returns a function
console.log(rudePerson("how are you")); // prints "how what are what you"
console.log(rudePerson("I like pie")); // prints "I what like what pie"


Invoking the interrupter function again:
let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"


***********************************************************************/

function interrupter(interruptingWord) {
  // Your code here
  //First invocation will take the interrupting word and store that value
  //Second invocation will take the sentence and add the interruptor in between each word
  //the function has to return a function

  return function interrupted(sentence){
    let words = sentence.split(" ");

    for (let i = 1; i < words.length; i += 2){
      words.splice(i, 0, interruptingWord);
    };

    return words.join(" ");
  }
}

let rudePerson = interrupter("what");
console.log(rudePerson("how are you"));
console.log(rudePerson("I like pie"));

let rudePerson2 = interrupter("yo"); // => returns a function
console.log(rudePerson2("I love dogs")); // prints "I yo love yo dogs"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = interrupter;
} catch (e) {
  return null;
}
