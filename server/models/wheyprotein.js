const mongoose = require('mongoose');

const wheyproteinschema = new mongoose.Schema({
  store: { type: String },
  name: { type: String },
  price: { type: Number },
  image: { type: String },
  weight: { type: Number },
  category: { type: String },
  url: { type: String }
})

module.exports = mongoose.model('WheyProtein', wheyproteinschema, 'wheyprotein');