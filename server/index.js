const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('../server/db/dbConnection');
const userRouter = require('./routers/userRouter');
const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());

connectDb();

app.use('/users',userRouter);
const port =  process.env.PORT_NO || 4000 ;
app.listen(port , ()=>{
        console.log(`Server on :- ${port}`);
})