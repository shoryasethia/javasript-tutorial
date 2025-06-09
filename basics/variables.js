const accountId = 2231214
let accountEmail = "shoryasethia4may@gmail.com"
var accountPassword = "12323411"
accountCity = "Kota"

let accountState; //currently `console.log(accountState)` will give `undefined`

/*
Use `let` rather than `var`.
Because of issues in block scope and functional scope.

We can write `;` at the end of a code line or not, it doesn't matter

*/

console.table([accountId,accountEmail,accountPassword,accountCity]);