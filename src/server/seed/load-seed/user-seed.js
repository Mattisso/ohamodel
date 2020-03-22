// getting-started.js
//var mongoose = require('mongoose');
'use strict';
/* eslint-disable  no-console */
/*eslint-disable no-unused-vars */
// require('../../config/ohadb').connectserver();
var async = require('async');
var _ = require('lodash');
var path = require('path');
// var omodel = require('../../omodels/user.js');
const {tocreateinstance} = require('../../sharedkernel/odainstance/toOdaInstance').toinit();
const userSeed=(function(){
 const  popular = function (omodel, callback) {

    async.series({

      removeUser: function (callback) {
        omodel.deleteMany({}, function (err) {
          if (err) {
            callback(err);
          }

          setTimeout(function () {
            callback(null, 'users Removed!');
          }, 200);
        });
      },

      InserUser: function (callback) {

        var users = [],
        userdata = [];
        //    _userdata;

        var user = new omodel({
          username: 'admin',
          role: 'admin',
          password: 'Password123'
        });
        // Add newly create omodel model to 'users' array
        users.push(user);

        for (var i = 0; i < users.length; i++) {
          var obj = users[i];
          userdata.push(obj);
        }
        async.eachSeries(

          userdata,

          function (user, userSavedCallBack) {

          user.save(function (err) {

            if (err)
              throw err;

            // attempt to authenticate user
            omodel.getAuthenticated('admin', 'Password123', function (err, user, reason) {
              if (err)
                throw err;

              // login was successful if we have a user
              if (user) {
                // handle login success
                console.log('login success');
                return;
              }

              // otherwise we can determine why we failed
              var reasons = omodel.failedLogin;
              switch (reason) {
              case reasons.NOT_FOUND:
              case reasons.PASSWORD_INCORRECT:
                // note: these cases are usually treated the same - don't tell
                // the user *why* the login failed, only that it did
                break;
              case reasons.MAX_ATTEMPTS:
                // send email or otherwise notify user that account is
                // temporarily locked
                break;
              }
            });
            userSavedCallBack();
          });

        },

          function (err) {

          if (err)
            throw (err);

          setTimeout(function () {
            callback(null, `Finished users in seeding ${users.length} records inserted`);
          }, 200);
        });

      }
    },
      function (err, results) {

      if (err) {
        console.log("Errors = ");
        throw (err);
      } else {
        console.log("Results = ");
        callback(results);
      }
    });  
  }
  function toinit(){
    return {
      popular:popular
    }
  }
  return {
    toinit:toinit
  }
})()

module.exports = {
 toinit:userSeed.toinit
};
