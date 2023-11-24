const accountId = 144553
let accountEmail = "Taher@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

// accountId = 45231 (Not Allowed)

// Prefer not to use var
// because of issue in block scope and functional scope

accountEmail = "Babuji@gmail.com"
accountPassword = "55221"
accountCity = "Banswara"

console.table([accountId, accountEmail, accountPassword, accountCity]);