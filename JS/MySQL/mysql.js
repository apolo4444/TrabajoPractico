const mysql=require("mysql");

const connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"ambiental"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("La conexion funciona");
})

connection.query("Select * from glosarioambiental",(err,rows)=>{
    if(err) throw err;
    //console.log(rows);
    /* document.writeln('<tr><td align="center">' + rows.concepto + '</td>');
    document.writeln('<td align="center">' + rows.definicion + '</td></tr>'); */
   
})

connection.end();