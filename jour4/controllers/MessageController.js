class MessageController {
  constructor() {
  }

  getAll(req, res) {
    req.db.collection('messages').find().toArray((err, messages) => {
      if (err)
        return res.status(500).json("Error");
      res.render("index", {messages: messages});
    });
  }

  create(req, res) {
    req.db.collection('messages').insertOne(req.body, (err) => {
      if (err)
        return res.status(500).json("Error");
      res.redirect(302, "/");
    })
  }
}

module.exports = MessageController;
