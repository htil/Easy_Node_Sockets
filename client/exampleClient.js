import ws_client from './ws_client.mjs';

// TESTING CLIENT CLASS

// Step 1: define the handlers for your client.
//         I.e. When an object is sent with a method name, create a function to be run when that message is received.
let handlers = {
    "set-background-color": function (m) {
        console.log("[Client] Set background color to " + m.params.color + ".")
    },
    "say": function (m) {
        console.log(m.params.text)
    }
}

// Step 2: create a new client.
//         Include the value of the host, port, and the handlers object you just created.
//         Beyond this, the client is running.
const myNewClient = new ws_client("localhost", 3000, handlers)

// Step 3: write code to interact with a server.
setInterval(function () {
    myNewClient.send_message("say", { text: "This was broadcast from the client. The next one happens in 6secs." })
}, 6000);