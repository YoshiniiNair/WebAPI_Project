const connect = require('./connection')

connect.deleteOne({id:"0"})
.then(res=> {
    console.log("Success deleting one");
});
    