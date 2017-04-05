let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let NoteSchema = new Schema({
  id: {
    type: Date
  },
  author: {
    type: String
  },
  text: {
    type: String
  }
});
// NoteSchema.index({departs: 1, origin: 1, destination: 1, seats_open: 1});
module.exports = mongoose.model('Note', NoteSchema);