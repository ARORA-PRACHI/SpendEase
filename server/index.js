const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('../server/db/dbConnection');
const userRouter = require('./routers/userRouter');
const expenseRouter = require('./routers/expenseRouter');
const chatRouter = require('./routers/chatRouter');
const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());

// Define routes
app.use('/auth', userRouter);
app.use('/expenses', expenseRouter);
app.use('/chat', chatRouter);

connectDb();

const port = process.env.PORT_NO || 4000;
app.listen(port, () => {
        console.log(`Server on :- ${port}`);
})