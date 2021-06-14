//CRUD opertoions

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;  //provide access to function neeeded for CRUD

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL , { useNewUrlParser : true }, {useUnifiedTopology: true } , (error,client)=>{
    if(error){
        return console.log('Unable to connect to databse')
    }
    
    const db = client.db(databaseName); //this will create a database of name task-manager where i will be able to store the data

                                 //CREATE
    // db.collection('users').insertOne({ //insertOne is async function so we will create a callback function 
    //     name: 'Radhika',
    //     Age : 22
    // }, (error , result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops) //ops is array of documents
    // })

    // db.collection('users').insertMany([
    //     {
    //         name : 'Radhika',
    //         age : 22
    //     } , {
    //         name : 'Torsha' , 
    //         age : 23
    //     }
    // ], (error,result) =>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description : 'Complete the ticket',
    //         completed : true
    //     },{
    //         description : 'Learn Docker' ,
    //         completed : false
    //     },
    //     {
    //         description : 'Attend the stand up',
    //         completed : true
    //     },
    //     {
    //         description :'Drink water',
    //         completed : true
    //     }
    // ],(error,result) => {
    //     if(error){
    //         return console.log('Unable to out tasks')
    //     }
    //     console.log(result.ops)
    // })
                    //CREATE

     db.collection('tasks').insertOne(
        {
            description : 'Complete the ticket',
            completed : true
        }
    ,(error,result) => {
        if(error){
            return console.log('Unable to out tasks')
        }
        console.log(result.ops)
    })



                     //READ
     db.collection('users').findOne({name : 'Radhika'},(error,user)=>{
            if(error){
                return console.log('Not able to find any')
            }
            console.log(user)

     })
         //Finding the tasks which have  been completed
     db.collection('tasks').find({completed : true}).toArray((error,users) => {
        if(error){
            return console.log('Unable to fetch')
        }
        console.log(users)
     }
     )

     db.collection('tasks').find({completed : true}).count((error,count)=>{
         console.log(count)
     })
     
    // wherease using find gives you mutilple outputs, and it points to that data and not returns the value directly

                    //UPDATE
    db.collection('users').updateOne({
        _id : new mongodb.ObjectID("60c638b4744ce029a083e6c7")
    } , {
        $set : {
            Age : 29
        }

    })
    .then(()=>{
        console.log(result)
    })
    .catch((error) => { 
            console.log(error)
    })

            //DELETE
            
    db.collection('tasks').deleteMany({
        description : "Complete the ticket"
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
}
)

       




