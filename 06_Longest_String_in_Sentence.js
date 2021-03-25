// Try to find the longest word in a string 
// (“Which is the longest word in this string”) 
// using the .reduce() method.

function findLongestWord(str) {
    var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
    // return longestWord.length; => IF YOU WANT TO SEE THE NBR!
}

findLongestWord("The quick brown fox jumped over the lazy dog");

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));