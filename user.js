const express = require("express");
let router = express.Router();


router.get("/",(req,res) => {                    //in server.js we give one user so we no need to give multiple times as user in code but in url we should give user and give the remaining info
    res.send("User informaton");                // url => http://localhost:3000/user
});

router.get("/newuser",(req,res) => {
    res.send("New user information");            // url =>  http://localhost:3000/user/newuser
});

router.get("/deleteuser",(req,res) => {
    res.send("User deleted");                    // url =>  http://localhost:3000/user/deleteuser  , we should not give space in url
});

router.post("/createUser",(req,res) => {
    res.send("Add new user")
});

router
    .route('/:id')
    .get((req,res) => {
        console.log(req.user);                         //to print the names based on the id in url and index in array
        res.send("Retrive id value is "+req.params.id)
    })
    .put((req,res) => {
        res.send("Update id value is "+req.params.id)
    })
    .delete((req,res) => {
        res.send("Delete id value is "+req.params.id)
    });

const users=[{name:"Raja"},{name:"Rani"},{name:"Sepoy"}];     //array of objects
router.param('id',(req,res,next,id) => {                      //param method is used to get the id value
    console.log(id);                                          //to print the id value
    req.user = users[id];                                     //to get the names based on the id
    next();                                                   //to go to the next function
    });



//For the above code we can also write like this (below code)

// router.get("/:id",(req,res) => {                  //after (:) the name given is the parameter name
//     res.send("retrive id value is "+req.params.id)        
// });

// router.put("/:id",(req,res) => {                  //after (:) the name given is the parameter name
//     res.send("update id value is "+req.params.id)        
// });

// router.delete("/:id",(req,res) => {                  //after (:) the name given is the parameter name
//     res.send("Delete id value is "+req.params.id)        
// });

module.exports = router;