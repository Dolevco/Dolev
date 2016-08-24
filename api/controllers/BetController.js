/**
 * UserController
 *
 * @module    :: Controller
 * @description :: Contains logic for handling requests.
 */

module.exports = {

  // This loads the sign-up page --> new.ejs
  'new': function(req, res) {
    res.view();
  },

  index: function(req, res, next) {

    // Get an array of all users in the User collection(e.g. table)
    Bet.find({ time: { $gte: new Date('2010-10-10') } },function foundBets(err, bets) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      res.view({
        bets: bets
      });
    });
  },

  create: function(req, res, next) {

    var betObj = {
      user: req.param('user'),
      gameId: req.param('gameId'),
      bet: req.param('bet')
    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Bet.create(betObj, function postCreated(err, bet) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        // If error redirect back to sign-up page
        return;
      }

      bet.save(function(err, bet) {
        if (err) return next(err);

        //res.redirect('/user/show/' + user.id);
      });
    });
  }
};