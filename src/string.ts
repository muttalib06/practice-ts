// The declaration method of string in ts;

let name: string = "Muttalib";
console.log(name);

// all js string methods support in ts;
let country: string = "Bangladesh";
country = country.toUpperCase();
// console.log(country);

// String literal type. This is most importand;
type status = "success" | "error" | "loading";

let apiStatus: status;

apiStatus = "error";
apiStatus = "loading";
// apiStatus = "pending" // This is called union of literal type;

// console.log(apiStatus);

// number literal type

let dice: 1|2|3|4|5|6;
dice = 3;
// dice = 8

// console.log(dice)

// boolean literal type;
let isAdmin: true;

isAdmin = true;
// isAdmin = false;

console.log(isAdmin)



