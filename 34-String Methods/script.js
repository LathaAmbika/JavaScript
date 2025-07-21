let first_name = "Latha";
let last_name = "Ambika";

//Concatenation
let c = first_name + " " + last_name;
console.log("Concatenation : " + c);

//concat
c = first_name.concat(" ", last_name);
console.log("Concat : " + c);

//append
c = "Latha ";
c += "Ambika";
console.log("Append : " + c);

//Escaping
c = "She Can't run";
console.log(c);

//Length
c = first_name.length;
console.log("Length : " + c);

//Change Case
c = first_name.toUpperCase();
console.log("Uppercase : " + c);
c = first_name.toLowerCase();
console.log("Lowercase : " + c);

c = first_name.indexOf("T");
console.log("indexOf T : " + c);

c = first_name.lastIndexOf("T");
console.log("lastIndexOf T : " + c);

c = first_name.charAt(1);
console.log("charAt 1 : " + c);

c = first_name.charCodeAt(1);
console.log("charCodeAt 1 : " + c);

c = first_name.substr(0, 3);
console.log("substr : " + c);

//Substring
let text = "01234567890";

c = text.substring(0, 4);
console.log("Substring : " + c);
c = text.substring(4);
console.log("Substring : " + c);
c = text.substring(4, 0);
console.log("Substring : " + c);
c = text.substring(25, 30);
console.log("substring Invalid Length : " + c);
c = text.substring(-3);
console.log("-3 : " + c);
//Slice
c = text.slice(2, 4);
console.log("slice : " + c);
c = text.slice(4, 2);
console.log("slice : " + c);
c = text.slice(25, 30);
console.log("slice Invalid Length : " + c);
c = text.slice(-5);
console.log("slice -5: " + c);

//Split in JS
let a = "Latha Ambika Computer Education";
c = a.split(" ");
console.log("Split : " + c);
console.table(c);

//replace in js
a = "I am from Salem";
console.log("Before Replace : " + a);
c = a.replace("Salem", "Chennai");
console.log("After Replace : " + c);

//includes in js
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
console.log(pets.includes("rat"));

//trim in js
a = " Latha ";
console.log("Before Trim : " + a.length);
a = a.trim();
console.log("After Trim : " + a.length);

//padStart padEnd
a = "5";
a = a.padStart(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, 0);
console.log(a);

a = "5";
a = a.padEnd(4, "$");
console.log(a);

//Long literal strings
//Method-1
let longString =
  "C is a powerful general-purpose programming language" +
  "developed at AT & T's Bell Laboratories of USA in 1972" +
  "it was designed and written by Dennis Ritchie..";
console.log(longString);
//Method-2
longString =
  "C is a powerful general-purpose programming language \
developed at AT & T's Bell Laboratories of USA in 1972\
it was designed and written by Dennis Ritchie..";
console.log(longString);

//String.fromCharCode()
console.log(String.fromCharCode(65, 66, 67, 68, 97, 98, 122));

/*Concatenation: The + operator is used to concatenate two strings and store the result in the variable c. The concat() method is also used to concatenate two strings, and store the result in the variable c.

Append: The += operator is used to append a string to the existing string, and store the result in the variable c.

Escaping: The \' is used to escape the single quote in the string.

Length: The length property is used to find the number of characters in a string and store the result in the variable c.

Change Case: The toUpperCase() method is used to convert a string to uppercase letters and the toLowerCase() method is used to convert a string to lowercase letters.

IndexOf and LastIndexOf: The indexOf() method returns the position of the first occurrence of a specified text in a string, and the lastIndexOf() method returns the position of the last occurrence of a specified text in a string.

charAt and charCodeAt: The charAt() method returns the character at the specified index in a string, and the charCodeAt() method returns the Unicode of the character at the specified index in a string.

Substring and Substr: The substring() method returns the characters in a string between two specified indices, and the substr() method returns the characters in a string beginning at a specified start position and through the specified number of characters.

Slice: The slice() method returns a part of a string.

Split: The split() method is used to split a string into an array of substrings based on a specified separator.

Replace: The replace() method is used to replace all occurrences of a specified string with another string.

Includes: The includes() method is used to check if an array includes a certain element.

Trim: The trim() method is used to remove whitespaces from both ends of a string.

PadStart and PadEnd: The padStart() method is used to pad the start of a string with a specified number of characters, and the padEnd() method is used to pad the end of a string with a specified number of characters.

Long literal strings: There are two ways to create a long literal string in javascript. First, by using the + operator to concatenate multiple strings, and second by using the \ to indicate a line continuation.

String.fromCharCode(): The String.fromCharCode() method is used to create a string from the specified sequence of Unicode values.
 */
