const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');
const controller = require('./controller/controller');
const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());

//Connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mySQL database connected')
})


const PORT = 5000;

app.use('/', controller)

io.on('connection', (socket) => {
    console.log('socket connection opened on ', socket.id)});

server.listen(PORT, () => console.log('Server listening for requests on port ' + PORT));