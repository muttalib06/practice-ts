// a variable with a string literal type;

let status: "success" | "error";
status = "error";
console.log(status);

type status = "success" | "error" | "loading";
let apiStatus: status;

apiStatus = "success";
apiStatus = "error"
apiStatus = "loading"

console.log(apiStatus);
