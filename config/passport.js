const passport = require('passport');
const LocalStrategy = require('passport-local');
const GoogleStrategy = require('passport-google-oauth20');
const bcrypt = require('bcryptjs')

const db = require('../models');
const { raw } = require('express');
const { where } = require('sequelize');
const User = db.User;

passport.use(new LocalStrategy({ usernameField: 'email' }, (username, password, done) => {
  return User.findOne({ 
    attributes: [ 'id', 'name', 'email', 'password' ],
    where: { email: username },
    raw: true
  })
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'email或密碼錯誤' })
      }
      return bcrypt.compare(password, user.password)
        .then((isMatch) => {
          if (!isMatch) {
            return done(null, false, { message: 'email或密碼錯誤' })
          }
          return done(null, user)
        })
    })
    .catch((error) => {
      error.errorMessage = '登入失敗'
      done(error)
    })
}))

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  scope: ['profile'],
  state: true,
}, (accessToken, refreshToken, profile, done) => {
  console.log('profile:', profile)
  const email = profile.emails[0].value;
  const name = profile.displayName;

  return User.findOne({
    attributes: [ 'id', 'name', 'email' ],
    where: { email },
    raw: true
  })
    .then((user) => {
      if (user) return done(null, user)
      
      const randomPwd = Math.random().toString(36).slice(-8);
      return bcrypt.hash(randomPwd, 10)
        .then((hash) => User.Create({ name, email, password: hash }))
        .then((user) => done(null, { id: user.id, name:user.name, email: user.email }))
    })
    .catch((error) => {
      error.errorMessage = '登入失敗';
      done(error)
    })
}))

passport.serializeUser((user, done) => {
  const { id, name, email } = user
  return done(null, { id, name, email })
})

passport.deserializeUser((user, done) => {
  done(null, {id: user.id})
})

module.exports = passport