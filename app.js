const express= require('express')

var app=express()

app.route('/')
.get((req,res)=>{
   
    res.write("Working on task 3")
    res.end()

})

app.route('/Students')
.get((req,res)=>{

    res.write("Hello Dear Students")
    res.end();

})
.post((req,res)=>{
    res.send("We are using post function")
})

.put((req,res)=>{
    res.send("We are using put function")
})

.delete((req,res)=>{
    res.send("Here we are using delete function")
})

var server=app.listen(8080);


