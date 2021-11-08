// For more information: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
console.log("Regular Expression In JavaScript");
console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions");

/*
let reg = /am/; // This is a regular expression literal
// reg = /am/g; // g means global flag for full string search
// reg = /AM/i; // i means case insensitive (AM == am)

console.log(reg);
console.log(reg.source);

let text = "Hello my name is neeraj kumar and I am 20 years old. I am a student of CSAI at Netaji Subhash University of Technology. Everyone uses me and I am such a innocent boy that I never say NO to anyone and always help them, due to this no one respects me and always treat me as a use and throw material";


// exec() function: returns array of result if the match is found else return null
let position = reg.exec(text);
console.log(position);

position = reg.exec(text);
console.log(position);

position = reg.exec(text);
console.log(position);

position = reg.exec(text);
console.log(position);

position = reg.exec(text);
console.log(position);

// test() function: returns true if match is found else return flase
let result = reg.test(text);
console.log(result);

// match() function: returns array of all matches (used global flag) or null if no match
let results = text.match(reg);
console.log(results);

// search() function: returns index of first match else -1
result = text.search(reg);
console.log(result);


// replace() function: returns a new string with all the replacements
let result1 = text.replace(reg, "REPLACED");
console.log(result1);

*/

/*
// Metacharacter symbols
let regex = /neeraj/;
regex = /^nee/;     // ^ means string starts with 'nee' (carrot symbol)
regex = /oy$/;      // $ means string ends with 'oy' (dollar symbol)
regex = /ne.r/;     // matches any 'one' character
regex = /ne*r/;     // matches any number of character in between (subsequence matching)
regex = /neerd?aj/; // ? optional character (here 'd')
regex = /ne\*r/;    // \ is escape character (matches ne*r as an actual string)

const str = "neeraj is a good boy and neeraj is a great programmer. In short neeraj is amazing boy";

let result = regex.exec(str);
console.log(result);

if (regex.test(str)) {
    console.log(`${regex.source} is matched in the string ${str}`);
}
else {
    console.log(`${regex.source} doesnot match in the string ${str}`);
}
*/

// [ADVANCED SEARCHING]

// CharacterSets []

let regex = /n[e-w]er/; // character set for successful matching or we can do /n[eght]eraj/
regex = /n[^eori]r/; // matches any BUT NOT e, o, r, i
regex = /n[a-dE-X]er[abh0-4]/; // Interpret yourself
const str = "neeraj is a good boy and neeraj is a great programmer. In short neeraj is amazing boy";

if (regex.test(str)) {
    console.log(regex.exec(str));
}
else {
    console.log("No match is found");
}

// Quantifiers {}
regex = /ne{2}raj/; // specifies the quantity of the character (neeraj)
regex = /ne{0,2}raj/; // matches for nraj or neraj or neeraj (0-2 r's are matched)


// Groupings ()
regex = /(nee){3}/; // matches for neeneenee



// Shorthand Character Classes
regex = /\wee/; // Word character = alphanumeric or underscore
regex = /\w+ee/;
regex = /\Wee/; // non word character
console.log(regex.exec(str));

// Read more from MDN website from the link given on the top of this file