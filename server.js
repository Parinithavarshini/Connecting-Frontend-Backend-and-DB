const express = require('express');              //Import express library and stores it in express variable(eg:express)
const app = express();                           //express functionality is stored in app variable

app.set('view engine', 'ejs');                    //set method is used to set the view engine
app.get('/', (req,res) => {                      //arrow function is used to handle the request and response
    //console.log("hi");                         //in backend console will print in cmd
    //res.status(500).send("Error occured");     //error occured message is displayed in the browser page
    //res.status(200).send({error:"error occured"});  //can also send objects
    //res.json({express:"Learning express"});     //can also send msg in json format

    res.send("Hello World");                   //send method is used to send the response
    // res.render("index.ejs");                         //render method is used to render the file
    }
);

//same as this route example is in the user.js file

// app.get("/user",(req,res) => {
//     res.send("User informaton");                //to add info in url we use => http://localhost:3000/user
// });

// app.get("/user/newuser",(req,res) => {
//     res.send("New user information");            //to add info in url we use =>  http://localhost:3000/user/newuser
// });

// app.get("/user/deleteuser",(req,res) => {
//     res.send("User deleted");                    //to add info in url we use =>  http://localhost:3000/user/deleteuser  , we should not give space in url
// });


const userRoute = require('./routes/user');      //import routes/user.js file and store it in userRoute variable
app.use('/user',userRoute);                      //use method is used to use the user.js file
app.listen(3000);                               //local host is created at port 3000


