var mysql = require('mysql');
var con = mysql.createConnection({
    host: "sv9.byethost9.org",
    user: "gamezwir_data",
    password: "2K75w5muSZLIlTh",
    database: "gamezwir_data"
  });
function query(sql, callback){
    
      con.query(sql, function (err, result) {
        if (err) throw err;
        callback(result, con)
      });
      
}
function end(){
    con.end((err) => {
        if (err) throw err;
    });

}

module.exports.con = con;
module.exports.query = query;
module.exports.end = end;


