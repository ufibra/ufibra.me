const mongoose = require('mongoose');
const WheyProtein = mongoose.model('WheyProtein');

exports.get = (req, res, next) => {
  WheyProtein.find({})
    .then(data => {
      res.status(200).send(data);
    }).catch(e => {
      res.status(400).send(e);
    });
}