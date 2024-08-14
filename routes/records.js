const express = require('express');
const router = express.Router();

const db = require('../models')
const Record = db.Record

router.get('/', (req, res) => {
  return Record.findAll({
    attributes: ['categoryId', 'name', 'date', 'amount'],
    raw: true
  })
    .then((records) => {
      return res.render('index', { records })
    })
    .catch((error) => {
      res.status(422).json(error)
    })
    
})

router.get('/new', (req, res) => {
  return res.render('new')
})

router.get('/:id/edit', (req, res) => {
  return res.render('edit')
})

router.post('/', (req, res) => {
  const { name, date, amount, categoryId } = req.body;

  return Record.create({ name, date, amount, categoryId })
    .then((record) => { res.redirect('/records') })
    .catch((err) => { console.log(err)})
})

router.put('/', (req, res) => {
  return res.redirect('/records')
})

router.delete('/', (req, res) => {
  return res.redirect('/records')
})

module.exports = router;