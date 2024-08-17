const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login/google', passport.authenticate('google', {scope: ['profile', 'email']}))

router.get('/redirect/google', passport.authenticate('google', {
  successRedirect: '/records',
  failureRedirect: '/login',
  failureFlash: true
}))

module.exports = router;