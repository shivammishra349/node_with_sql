let express=require('express');

let sqlConn=require('./connection/database');

let app=express();

function getPerson(){
    sqlConn.execute('SELECT * FROM person').then(([rows,data])=>{
        console.log(rows)
    })
}

function Insert(){
    // let querry='INSERT INTO person(full_name,age,city,gender) VALUES(?,?,?,?)';// for protection of sql injection
    // let values=['suresh',26,'noeda','male']

    // sqlConn.execute(querry,values).then((result)=>{
    //     console.log(result)
    // })
    sqlConn.execute('INSERT INTO person(full_name,age,city,gender) VALUES(?,?,?,?)',
    ['mahesh',26,'rasulabad','trans']
    )
    .then((result)=>{
        console.log(result)
    })
}

function findById(id){
    sqlConn.execute('SELECT * FROM person where person.Id=?',[id])
    .then(([row,data])=>{
        console.log(row)
    }).catch((err)=>{
        console.log(err)
    })
}


function DeleteById(id){
    sqlConn.execute('DELETE FROM person where person.Id=?',[id])
    .then(([row,data])=>{
        console.log(row)
    }).catch((err)=>{
        console.log(err)
    })
}
//Insert()
getPerson()
//findById(3)
//DeleteById(3)




app.use((req,res,next)=>{
    res.send('<h1>Hello guys</h1>')
})

app.listen(1999)