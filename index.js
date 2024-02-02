const http = require("http");
const WebSocket = require("ws");

class BackEndSocket {
  constructor(app, port) {
    const server = http.createServer(app);
    const PORT = port;

    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    const wss = new WebSocket.Server({ server });
    this.wss = wss;

    setInterval(() => {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.ping();
        }
      });
    }, 30000);
  }

  sendResponse(id, message) {
    this.wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        const data = { id: id, content: message };
        client.send(JSON.stringify(data));
      }
    });
  }
}

module.exports = { BackEndSocket };
