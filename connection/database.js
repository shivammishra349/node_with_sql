let mysql=require('mysql2');

let pool=mysql.createPool({
    host:'localhost',
    database:'node_js',
    user:'root',
    password:'shivam12'
})

module.exports=pool.promise()