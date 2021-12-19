var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ExampleSchema = new Schema({
  string:{
    type: String,
    required: false,
    maxlength: 100
  }
});

module.exports = mongoose.model('Example', ExampleSchema);