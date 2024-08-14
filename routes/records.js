const express = require('express');
const router = express.Router();

const db = require('../models')
const Record = db.Record

router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/new', (req, res) => {
  return res.render('new')
})

router.get('/:id/edit', (req, res) => {
  return res.render('edit')
})

router.post('/', (req, res) => {
  return res.redirect('/records')
})

router.put('/', (req, res) => {
  return res.redirect('/records')
})

router.delete('/', (req, res) => {
  return res.redirect('/records')
})

module.exports = router;