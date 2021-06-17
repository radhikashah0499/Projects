const express = require('express');
const router = express.Router();

router.get('/tasks',(req,res )=>{
    const str=[{
        concept : "Networking Bascis"
    },{
        concept: "ReactJs"
    },{
        concept :"Nodejs"
    },
    {
        concept : "Serverless"
    },{
        concept : "Lambda"
    }
];
res.end(JSON.stringify(str))
});


router.get('/addTasks',(req,res)=>{
    res.send("asnx");
    console.log("js");
});

module.exports = router;
