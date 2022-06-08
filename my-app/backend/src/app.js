const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const phoneRouter = require('./routes/phones');
const statRouter = require('./routes/statistics')

const app = express();
//Middleware
console.log('Connecting to database ', process.env.MONGO_URL);
mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
    console.log("connect to database success");
}).catch(err=>console.log("MongoErr: ", err))



app.use(express.json())
app.use(cors());
app.get('/', (_,res)=>{
    res.send('Hello')
})
app.use('/phones', phoneRouter);
app.use('/statistics', statRouter);


const PORT = 3005;


// Start server
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
})