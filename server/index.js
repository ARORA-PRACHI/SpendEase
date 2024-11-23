const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('../server/db/dbConnection');

const expenseRouter = require('./routers/expenseRouter')
const app = express();
dotenv.config();


app.use(cors());
app.use(express.json());
app.use('/expenses',expenseRouter);
connectDb();

const port =  process.env.PORT_NO || 4000 ;
app.listen(port , ()=>{
        console.log(`Server on :- ${port}`);
})