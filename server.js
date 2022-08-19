import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
  socket.on("Text-change", (data) => {
   
    socket.broadcast.emit("change", data);
  })
});

httpServer.listen(3000);