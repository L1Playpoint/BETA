const io = require("socket.io")({
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
  allowEIO3: true,
});

var activeUsers = [];

io.on("connection", (socket) => {
  socket.on("join online pool", (data) => {
    const { username } = data;
    socket.username = username;
    activeUsers.push(socket.username);
    // file deepcode ignore PureMethodReturnValueIgnored: <please specify a reason of ignoring this>
    socket.join("Active Users");

    io.sockets.in("Active Users").emit("newUserUpdate", activeUsers);
  });

  socket.on("get active users", async () => {
    socket.emit("return active users", activeUsers)
  })

  socket.on("disconnect", () => {
    socket.leave("Active Users");
    activeUsers.splice(activeUsers.indexOf(socket.username), 1);
  });
});

const PORT = process.env.PORT || 8000;

io.listen(PORT);
console.log("Socket Server on Port =>", PORT);
