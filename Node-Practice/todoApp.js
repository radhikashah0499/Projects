const express = require('express')
const app = express();

let todos = [
    'W3schools Nodejs',
    'Node.js Tutorial for Beginners: Learn Node in 1 Hour',
    


]
app.get('/' , (req,res) => {

    let listodtodos = '';

    for(let i=0;i<todos.length ;i++)
    {
        listodtodos += ' <input type="checkbox"/>' + todos[i] + '<br/>'
    }

    let html  = ` 
    <html>
        <body>
            <form action = "add">
                <input name="task" >
                <button type="submit"> Add </button>
            </form>
                ${listodtodos}
            
        </body>
    </html>
   `
   res.send(html);
   

})

app.listen(4444);
app.get('/add',(req,res) =>{
    
    console.log(req.query);
    todos.push(req.query.task)
    res.redirect('/'); 
} )