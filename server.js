let connection;
var oracledb = require('oracledb');

(async function() {
try{
   connection = await oracledb.getConnection({
        user : 'a_raiabd',
        password : 'raia',
        connectString : '192.1.1.150:1521/r102d.raiadrogasil.com.br'
   });
   console.log("Successfully connected to Oracle!")
} catch(err) {
    console.log("Error: ", err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch(err) {
        console.log("Error when closing the database connection: ", err);
      }
    }
  }
})()