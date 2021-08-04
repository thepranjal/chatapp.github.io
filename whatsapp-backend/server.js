//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors";

//app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1116401",
    key: "b6638bd0043072e0b5a8",
    secret: "c4c87da44a5791cc7689",
    cluster: "eu",
    useTLS: true
  });




//middleware
app.use(express.json());
app.use(cors());

  


//DB config
const connection_url = 
  'mongodb+srv://admin:y0I75AurH2RrOngi@cluster0.yrgol.mongodb.net/whatsappdb?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.once('open', () => {
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        console.log("a change occured", change);

        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
   
            pusher.trigger('messages', 'inserted' ,
               {
             name: messageDetails.user,
             message: messageDetails.message,
             timestamp: messageDetails.timestamp,
             received: messageDetails.received
               }
           );
        } else{
            console.log('Error Trigging Pusher')
        } 
    });
});


 
//app routes
app.get('/',(req, res)=>res.status(200).send('Hello World'));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err)

        } else{
            res.status(200).send(data)
        }
    })
})











app.post('/messages/new',(req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)        }
    })
})


//listen
app.listen(port,()=>console.log('listening on localhost:${port}'));