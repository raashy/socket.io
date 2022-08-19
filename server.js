const io = require("socket.io")(8080, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("disconnect", () => console.log("Client disconnected"));
  socket.on("Text-change", (data) => {
   
    socket.broadcast.emit("change", data);
  })
});

