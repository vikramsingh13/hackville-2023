const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');
const {errorHandler} = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 3001;

//connecting to mongodb atlas
//connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use('/api', require("./routes/promptRoutes"));

//serving static frontend for production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client', 'dist')));

    app.get('*', (req, res)=>{
        res.sendFile(
            path.resolve(__dirname, 'client', 'dist', 'index.html')
        );
    })
} else {
    app.get('/', (req, res) => {
        res.send('Please set to production.');
    });
}

//custom errorHandler
app.use(errorHandler);

app.listen(PORT, (err)=>{
    if(err) {
        console.warn(`Listening error on port ${PORT} : ${err.message}`);
    } else {
        console.log(`Express server listening on port : ${PORT}`);
    }

});