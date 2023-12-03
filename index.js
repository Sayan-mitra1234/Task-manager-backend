const express=require('express')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const cors=require('cors')

const Routes =require('./server/route.js');
const Connection= require('./database/db.js');

const app = express();


dotenv.config()
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = '8080';

Connection(USERNAME, PASSWORD);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));