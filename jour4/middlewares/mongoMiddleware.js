const MongoClient = require('mongodb').MongoClient;

module.exports = (mongoUri) => {
  let dbPromise = new Promise((resolve, reject) => {
    MongoClient.connect(mongoUri, (err, db) => {
      if (err)
        return reject(err);
      resolve(db)
    });
  });

  return (req, res, next) => {
    dbPromise
    .then((db) => {
      req.db = db;
      next();
    })
    .catch((err) => {
      res.status(500).json("Can't connect to DB");
    });
  };

};
