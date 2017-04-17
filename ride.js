// Defines a Mongoose model for a Ride testing123
let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let RideSchema = new Schema({
  departs: {
    type: Date,
    required: 'You must specify your departure date.'
  },
  origin: {
    type: String,
    required: 'You must specify from where you are leaving.'
  },
  destination: {
    type: String,
    required: 'You must specify to where you are going.'
  },
  notes: String,
  seats_open : {
    type: Number,
    // min: 0
  },
  passengers: [{

    first_name: {
      type: String,
      // required: true
    },
    last_name: {
      type: String,
      // required: true
    }
  }],
  driver: {
    first_name: {
      type: String,
      // required: true
    },
    last_name: {
      type: String,
      // required: true
    },
    car: {
      seats: {
        type: Number,
        // required: true,
        min: 1
      },
      description: {
        type: String,
        // required: true
      }
    }
  }
}, {
  timestamps: true,
  minimize: false
});
RideSchema.index({departs: 1, origin: 1, destination: 1, seats_open: 1});
module.exports = mongoose.model('Ride', RideSchema);