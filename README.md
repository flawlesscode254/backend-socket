# Using Backend Socket

- You need to have a `node js` backend going first before you can proceed to use this package.
- Specifically and `express js` backend.
- Your existing code should look something like this

```javascript
    const express = require("express");

    const app = express();
```

## Library Installation

```bash
    npm install backend-socket
```

- This will install the library into your code and you can now use it

## Library Usage

- To use the library, require it in the file where your entry file is like this

```javascript
    // With require
    const { BackEndSocket } = require("backend-socket")
```
- Now initialize it
```javascript
    const express = require("express");
    const { BackEndSocket } = require("backend-socket")

    const app = express();

    // It requires the app and port in which the app runs
    const connection = new RealTimeConnection(app, 3042);

```
- When you initialize it, ensure to pass the app and port that your app should run in.
- Now you have access to the function that sends messages
- Use it like this
```javascript
    // Requires clientId and messageContent    
    connection.sendResponse(clientId, messageContent);
```
- You have to provide the `clientId` which can be used to send messages to specific clients
- Then provide the `messageContent`, which can be a `string` or `object`
- Now you will be able to send messages