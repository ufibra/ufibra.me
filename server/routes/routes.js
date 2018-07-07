const mongo = require('mongodb');

const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

module.exports = (function() {
  'use strict';
  const router = express.Router();

  router.get('/wheyprotein', function (req, res) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      const dbo = db.db("ufibrame");
      dbo.collection("wheyprotein").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
    });
  })


  return router;    
})();
