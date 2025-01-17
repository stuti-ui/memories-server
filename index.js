import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


import postRoutes from './routes/posts.js';

const app=express()



app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

app.use('/posts',postRoutes);

const CONNECTION_URL='mongodb+srv://stutisaini_098:qwerty12345@cluster0.2mca9.mongodb.net/Cluster0?retryWrites=true&w=majority';
const PORT=process.env.PORT||5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> app.listen(PORT,()=>console.log(`Server running on PORT : ${PORT}`)))
    .catch((error)=>console.log(error.message) );

mongoose.set('useFindAndModify',false);