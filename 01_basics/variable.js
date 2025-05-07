const accountId = 1234
let accountEmail = 'rajan@google.com'
var accountPassword = '14455'
accountCity = 'Noida'

// accountId = 2

/*
prefer not to use var
because to issue in block scope and function scope.
*/

accountEmail = 'rj@rj.com'
accountPassword = '121212'
accountCity = 'Delhi'

let accountCode;

console.table([accountId, accountEmail, accountPassword, accountCity, accountCode])