'use strict';
let mongoose = require('mongoose');
let Ride = mongoose.model('Ride');
let Note = mongoose.model('Note');
module.exports = app => {
  app.route('/rides')
    .get((req, res, next) => {
      Ride.find(req.query, (err, rides) => {
        if (err) {
          return next(err);
        }
        res.json(rides);
      });
    })
    .post((req, res, next) => {
      let new_ride = new Ride(req.body);
      new_ride.save((err, ride) => {
        if (err) {
          return next(err);
        }
        res.json(ride);
      });
    });

  app.route('/rides/:rideId')
    .get((req, res, next) => {
      Ride.findById(req.params.rideId, (err, ride) => {
        if (err) {
          return next(err);
        }
        res.json(ride);
      });
    })
    .post((req, res, next) => {
      Ride.findOneAndUpdate(
        { _id: req.params.rideId },
        req.body,
        { new: true },
        (err, ride) => {
          if (err) {
            return next(err);
          }
          res.json(ride);
        }
      );
    })
    .delete((req, res, next) => {
      Ride.findOneAndRemove({ _id: req.params.rideId }, (err, ride) => {
        if (err) {
          return next(err);
        }
        res.json(ride);
      });
    });

  app.route('/notes')
  .get((req, res, next) => {
    Note.find(req.query, (err, notes) => {
      if (err) {
        return next(err);
      }
      res.json(notes);
    });
  })
  .post((req, res, next) => {
    let new_note = new Note(req.body);
    new_note.save((err, note) => {
      if (err) {
        return next(err);
      }
      res.json(note);
    });
  });
};