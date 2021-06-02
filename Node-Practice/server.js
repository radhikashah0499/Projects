const express =require ('express');
var d = new Date();

const app = express();

app.get('/',(req,res)=>{
  res.send('Hi There! ')
  
})
app.get('/treat',(req,res) =>{

  res.json(
    {
      name: 'Pizza',
      price: 'Rs. 249'
    }
  )
})
app.get('/hello',(req,res) =>{
  var mnth = d.getMonth() +1
  res.json({
    message : 'Hi , how you doing!?',
    date : `${d.getDate()}/${mnth}/${d.getFullYear()} `
  })
})
app.listen(3333)

