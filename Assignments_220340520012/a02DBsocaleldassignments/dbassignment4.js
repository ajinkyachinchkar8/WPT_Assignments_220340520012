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




//Single select  -- query on itemno.
/*
con.query('select deptno,dname,loc from dept where deptno=?',["34"],(err,res)=>{
    if(err){
        console.log("Error"+err);
    }
    else {
        if(res.length > 0)
        //console.log(rows[0].userid);
        console.log(res[0].deptno+" "+res[0].dname+" "+res[0].loc);
    }
} )   */



//	Multi select – query on category

con.query('select deptno,dname,loc from dept where dname=?',["Ram"],(err,res)=>{
    if(err){
        console.log("Error"+err);
    }
    else{
        if(res.length>0){
            console.log(res.length);
           for (let index = 0; index < res.length; index++) {
               console.log(res[0].deptno+" "+res[0].dname+" "+res[0].loc);
               
           }
        }
        else{
            console.log("entry not found");
        }
    }
} ); 








