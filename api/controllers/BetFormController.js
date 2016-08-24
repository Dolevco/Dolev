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

  create: function(req, res, next) {

    var betObj = {
      user: req.param('user'),
      games: req.param('games')
    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    BetForm.create(betObj, function postCreated(err, betForm) {

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

      betForm.save(function(err, betForm) {
        if (err) return next(err);

        //res.redirect('/user/show/' + user.id);
      });
    });
  },

};