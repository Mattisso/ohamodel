'use strict'
const userClass=(function(){
  const modelObject = {
    username: {
      type: String,
      required: true,
      index: {
        unique: true
      },
      lowercase: true,
      trim: true
    },
    role: {
      type: String,
    default:
      'user'
    },
    password: {
      type: String,
      required: true
    },
    loginAttempts: {
      type: Number,
      required: true,
    default:
      0
    },
    lockUntil: {
      type: Number,
    default:
      0
    }
  
  }
  
  class userClass {
    constructor( username, role, password, loginAttempts = 0, lockUntil = 0) {  
     this._username = username;
      this._role = role;
      this._password = password;
      this._loginAttempts = loginAttempts;
      this._lockUntil = lockUntil; 
    }
  
   get lockuntil() {
      return this._lockUntil;
    }
    set lockuntil(lockUntil) {
      this._lockUntil = lockUntil;
      return this;
    }
     get username() {
      return this._username;
    }
    set username(username) {
      this._username = username;
      return this;
    } 
    get role() {
      return this._role;
    }
    set role(role) {
      this._role = role;
      return this;
    }
    get password() {
      return this._password;
    }
    set password(password) {
      this._password = password;
      return this;
    }
    get loginattempts() {
      return this._loginAttempts;
    }
    set loginattempts(loginAttempts) {
      this._loginAttempts = loginAttempts;
      return this;
    }
  }
function toinit(){
  return {
userClass:userClass,
modelObject:modelObject
  }
}
  return {
toinit:toinit
  }

})();
module.exports={
toinit:userClass.toinit
}
