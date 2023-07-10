const mongoose = require('mongoose');
const db = 
"mongodb+srv://p22014664:admin@cluster0.i3blmdh.mongodb.net/WebAPI_Project" //?retryWrites=true&w=majority
mongoose.connect(db).then(()=> {
console.log("Connected to database");
}
)
.catch(()=> {
console.log("Can't connect to database");
}
)
const HPSchema = new mongoose.Schema({
    id: { type: String},
    name: { type: String},
    blood_status: { type: String},
    house: { type: String},
    patronus: { type: String},
    wands: { type: String},
}
);
const Connect = mongoose.model('Harry Potter', HPSchema);
module.exports = Connect;