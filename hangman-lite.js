console.log ("Hangman Lite")
//Define an individual letter.
//Define a given word (spectacular)
//Iterate over word to see if letter is in the word.
//Check if the defined individual letter exists in the given word.
//If yes, check the number of times the defined letter exists in the given word.

let word = 'spectacular';
let letter = 'c';
let occurances = 0;

for ( let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
        occurances += 1; 
    } else if (word[i] !== letter) {
        continue;
    }

}
console.log(letter + " occurs " + occurances + " times")

console.log("Change Machine")





