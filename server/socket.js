import app from './index.js'
import { Server } from "socket.io";
import { chatController } from './controllers/chat.js';

const serv = app.listen(app.get('PORT'), ()=>{
    console.log('SERVER STARTED', app.get("PORT"))
})

const io = new Server(serv)

io.on('connection', async (socket)=>{
    socket.on('send message', (data)=>{
        socket.broadcast.emit('receive message', data)
        chatController.saveMessage(data.owner, data.message)
    })
})