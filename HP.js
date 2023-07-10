const axios = require('axios');

const id = 'bc1e40db-edbc-4598-af51-0ab0de8ad142'; 
const name = 'Abigail Pugh'; 

//const querystr = `https://api.potterdb.com/v1/characters/bc1e40db-edbc-4598-af51-0ab0de8ad142`;
const querystr = `https://api.potterdb.com/v1/characters/${id}`;

//const querystr = `https://api.potterdb.com/v1/characters`;

axios.get(querystr).then( (response) =>{
    console.log(response.data.result[0].id);
    console.log(response.data.result[0].name);
    console.log(response.data.result[0].blood_status);
    console.log(response.data.result[0].house);
    console.log(response.data.result[0].patronus);
    console.log(response.data.result[0].wands);
}
);