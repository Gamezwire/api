var { Client } = require('pg');
var con = new Client({
    host: "dpg-cg1l2do2qv25u2hk5u2g-a",
    user: "data_b3ss_user",
    password: "lXlR9IsZXtqtlqoLEgDj9djuT5rvBm6V",
    database: "data_b3ss"
  });
  con.connect((err) => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
    }
  })
function query(sql, callback){
    
      con.query(sql, function (err, result) {
        if (err) throw err;
        callback(result)
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


