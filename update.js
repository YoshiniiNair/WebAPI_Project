const connect = require('./connection');

connect.updateOne({id:"0"}, {name:"Abigail Pugh"})
.then(res=> {
console.log("Success update one");
});