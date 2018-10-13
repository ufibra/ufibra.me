const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const router = express.Router();

module.exports = (() => {
  router.get('/wheyprotein', (req, res) => {
    MongoClient.connect(url, (err, db) => {
      if (err) throw err;
      const dbo = db.db("ufibrame");
      dbo.collection("wheyprotein").find({}).toArray((err, result) => {
        if (err) {
          res.status(500).json({errors: [err]})
        }
        res.json(result);
        db.close();
      });
    });
  })

  return router;    
})();
