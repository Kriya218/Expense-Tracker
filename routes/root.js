const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  return res.redirect('/login')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/login', (req, res) => {
  res.send(req.body)
})

router.post('/logout', (req, res) => {
  res.redirect('/login')
})


module.exports = router;