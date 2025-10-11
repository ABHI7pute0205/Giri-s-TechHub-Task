/* Q15. Write a java program to print all ASCII characters with their values.

ASCII 0–31 are control characters → may appear blank or special symbols in console.

Printable characters mostly 32–126.
*/

let AsciiStart = 0;
let AsciiEnd = 127;

while (AsciiStart <= AsciiEnd) {
  console.log(AsciiStart, ": ", String.fromCharCode(AsciiStart));
  AsciiStart++;
}
