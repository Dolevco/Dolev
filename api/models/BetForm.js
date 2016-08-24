/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {

  schema: true,

  attributes: {

  	user: {
  		type: 'string',
  		email: true,
      required: true
  	},

  	games: {
      collection: 'Bet',
      via : 'model'
    },

    result: {
      type: 'boolean'
    },


    toJSON: function() {
      var obj = this.toObject();
      delete obj._csrf;
      return obj;
    }

  },



  beforeCreate: function (values, next) {

    // This checks to make sure the password and password confirmation match before creating record
    if (!values.user) {
      return next({err: ["Bet error."]});
    }

    next();
  }

};
