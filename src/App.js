const express = require('express');
const app = express();
const employeeRouters = require('./routes/employeeRoute');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

app.use('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});
app.use('/employee',employeeRouters);

app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
});