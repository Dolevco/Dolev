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

  	gameId: {
      type: 'string',
      required: true
    },

    homeTeam: {
      type: 'string',
      required: true
    },

    homePrice: {
      type: 'double',
      required: true
    },

    awayTeam: {
      type: 'string',
      required: true
   },

   awayPrice: {
      type: 'double',
      required: true
    },

    drawPrice: {
      type: 'double',
      required: true
    },

    time: {
      type: 'date',
      required: true,
      defaultsTo: Date.now()
    },

    bet: {
    	type: 'string'
    },

    result: {
    	type: 'string'
    },

    toJSON: function() {
      var obj = this.toObject();
      delete obj._csrf;
      return obj;
    }

  },

  beforeCreate: function (values, next) {

    // This checks to make sure the password and password confirmation match before creating record
    if (!values.gameId) {
      return next({err: ["game error."]});
    }

    next();
  }

};
