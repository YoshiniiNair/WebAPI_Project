const connect = require('./connection');
const axios = require('axios');

const id = 'bc1e40db-edbc-4598-af51-0ab0de8ad142'; 
const name = 'Abigail Pugh'; 

//const querystr = `https://api.potterdb.com/v1/characters/bc1e40db-edbc-4598-af51-0ab0de8ad142`;
const querystr = `https://api.potterdb.com/v1/characters/${id}`;

axios.get(querystr).then( (response) =>{
    HPValue = new connect ({
        id:response.data.id,
        name:response.data.name,
        blood_status:response.data.blood_status,
        house:response.data.house,
        patronus:response.data.patronus,
        wands:response.data.wands
    });

    HPValue.save().then(result=> {
        console.log("Success" + result);
        })
    
        .catch (error=> {
        console.log("Error" + error);
        }
    
        );
    });