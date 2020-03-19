/*eslint-disable no-unused-vars */
"use strict";
const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const  bcrypt = require('bcryptjs')
  SALT_WORK_FACTOR = 10,
  MAX_LOGIN_ATTEMPTS = 5,
  LOCK_TIME = 2 * 60 * 60 * 1000;
const {getauditentity, gettoObject ,extendSchema, auditUserEntityPlugin} = require('../helpers/odabaseSchema').toinit();
const {userClass, modelObject}=require('../staticModels/staticUser').toinit();

  const user = (function () {
    const auditBaseSchema = new Schema(getauditentity, gettoObject);
    const UserSchema = extendSchema(auditBaseSchema, modelObject);
    UserSchema.loadClass(userClass);
    UserSchema.plugin(auditUserEntityPlugin);
    // expose enum on the model
    UserSchema.statics.failedLogin = {
      NOT_FOUND: 0,
      PASSWORD_INCORRECT: 1,
      MAX_ATTEMPTS: 2
    };
  
    UserSchema.virtual('isLocked').get(function () {
      // check for a future lockUntil timestamp
      return !!(this.lockUntil && this.lockUntil > Date.now());
    });
  
    UserSchema.methods.comparePassword = function (candidatePassword, cb) {
      bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err)
          return cb(err);
        cb(null, isMatch);
      });
    };
  
    UserSchema.methods.incLoginAttempts = function (cb) {
      // if we have a previous lock that has expired, restart at 1
      if (this.lockUntil && this.lockUntil < Date.now()) {
        return this.updateOne({
          $set: {
            loginAttempts: 1
          },
          $unset: {
            lockUntil: 1
          }
        }, cb);
      }
      // otherwise we're incrementing
      var updates = {
        $inc: {
          loginAttempts: 1
        }
      };
      // lock the account if we've reached max attempts and it's not locked already
      if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLocked) {
        updates.$set = {
          lockUntil: Date.now() + LOCK_TIME
        };
      }
      return this.updateOne(updates, cb);
    };
  
    // expose enum on the model, and provide an internal convenience reference
    var reasons = UserSchema.statics.failedLogin = {
      NOT_FOUND: 0,
      PASSWORD_INCORRECT: 1,
      MAX_ATTEMPTS: 2
    };
  
    UserSchema.statics.getAuthenticated = function (username, password, cb) {
      this.findOne({
        username: username
      }, function (err, user) {
        if (err)
          return cb(err);
  
        // make sure the user exists
        if (!user) {
          return cb(null, null, reasons.NOT_FOUND);
        }
  
        // check if the account is currently locked
        if (user.isLocked) {
          // just increment login attempts if account is already locked
          return user.incLoginAttempts(function (err) {
            if (err)
              return cb(err);
            return cb(null, null, reasons.MAX_ATTEMPTS);
          });
        }
  
        // test for a matching password
        user.comparePassword(password, function (err, isMatch) {
          if (err)
            return cb(err);
  
          // check if the password was a match
          if (isMatch) {
            // if there's no lock or failed attempts, just return the user
            if (!user.loginAttempts && !user.lockUntil)
              return cb(null, user);
            // reset attempts and lock info
            var updates = {
              $set: {
                loginAttempts: 0
              },
              $unset: {
                lockUntil: 1
              }
            };
            return user.updateOne(updates, function (err) {
              if (err)
                return cb(err);
              return cb(null, user);
            });
          }
  
          // password is incorrect, so increment login attempts before responding
          user.incLoginAttempts(function (err) {
            if (err)
              return cb(err);
            return cb(null, null, reasons.PASSWORD_INCORRECT);
          });
        });
      });
    };
  
    // Omit the password when returning a user
    UserSchema.set('toJSON', {
      transform: function (doc, ret, options) {
        delete ret.password;
        return ret;
      }
    });
  
    var User = mongoose.model('User', UserSchema);
    module.exports = User;
  
    function toinit() {
      return {
        User: User
      }
    }
    return {
      toinit: toinit
    }
  })();
  module.exports = {
    toinit: user.toinit
  }
  
  require('../../config/ohadb').connectserver();
  const obj = { "username": "admin", "role": "admin", "password": "Password123"}
  // ocompte.toinit().Ocompte.create(obj);
  // const obj={ CompteNumber: '86'}
    var small = new ocompte.toinit().Ocompte(obj);
  small.save(function (err) {
  if (err) return handleError(err);
  // saved!
  }) ; 
  ocompte.toinit().Ocompte.find({}, function (err, data) {
    if (err)
      throw err;
    console.log(data);
  });
   