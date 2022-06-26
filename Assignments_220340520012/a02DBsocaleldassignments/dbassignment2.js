const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'satara',
	port:3306
}; // change port to 3306 that may be the port mostly.


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);


con.query('insert into dept(deptno,dname,loc) values (?,?,?)', [34,"Ram","Mumbai"], 
(err, res1) => {
    if (err) {
        console.log("error has occured let us see");  
    } else {
        console.log(res1.affectedRows)     
       
    }
}
);

con.query('select * from dept',[],(err,res)=>{
    if(err){
        console.log("Error"+err);
    }
    else{
        console.log(res);
    }
} ); 

