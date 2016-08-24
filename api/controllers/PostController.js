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

    var postObj = {
      author: req.param('author'),
      text: req.param('text'),
      email: req.param('email')
    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Post.create(postObj, function postCreated(err, post) {

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

      post.save(function(err, post) {
        if (err) return next(err);

        //res.redirect('/user/show/' + user.id);
      });
    });
  },

};