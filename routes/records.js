const express = require('express');
const router = express.Router();

const db = require('../models')
const Record = db.Record

router.get('/', (req, res, next) => {
  return Record.findAll({
    attributes: ['categoryId', 'name', 'date', 'amount'],
    raw: true
  })
    .then((records) => {
      return res.render('index', { records })
    })
    .catch((error) => {
      error.errorMessage = '資料讀取失敗';
      next(error)
    })    
})

router.get('/new', (req, res) => {
  return res.render('new')   
})

router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;

  return Record.findByPk(id, {
    attributes: ['id', 'name', 'date', 'amount', 'categoryId'], raw: true})
    .then((record) => res.render('edit', { record }))
    .catch((error) => { 
      error.errorMessage = '資料讀取失敗';
      next(error)
     })
})

router.post('/', (req, res, next) => {
  const { name, date, amount, categoryId } = req.body;

  return Record.create({ name, date, amount, categoryId })
    .then(() => {
      req.flash('success', '新增成功') 
      return res.redirect('/records') 
    })
    .catch((error) => {
      error.errorMessage = '新增失敗';
      next(error)
    })  
})

router.put('/:id', (req, res, next) => {
  const id =  req.params.id;
  const { name, date, amount, categoryId } = req.body;

  return Record.update({ name, date, amount, categoryId }, { where: { id } })
    .then(() => {
      req.flash('success', '修改成功')
      return res.redirect('/records')})
    .catch((error) => {
      error.errorMessage = '修改失敗';
      next(error)
    })
})

router.delete('/:id', (req, res, next) => {
  const id =  req.params.id;

  return Record.destroy({ where: { id } })
    .then(() => {
      req.flash('success', '刪除成功')
      res.redirect('/records')})
    .catch((error) => {
      error.errorMessage = '刪除失敗';
      next(error)
    })   
})

module.exports = router;