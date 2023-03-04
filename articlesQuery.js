var dbc = require("./dbc.js");
sql = "SELECT * FROM users";
dbc.query(sql, (result) => {
    console.log(result);
})  