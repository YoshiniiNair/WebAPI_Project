const connect = require('./connection');

connect.deleteMany()
.then(res=> {
console.log("Success deleting all");
});