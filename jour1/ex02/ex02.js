var EventEmitter = require('events').EventEmitter;
var e = new EventEmitter();

function onNewMessage() {
  console.log("I received a new message")
}

function onNewEmail() {
  console.log("I received a new email")
}

e.on("message", onNewMessage);
e.on("email", onNewEmail);

e.emit("message"); //Should print "I received a new message";
e.emit("email");   //Should print "I received a new email";
