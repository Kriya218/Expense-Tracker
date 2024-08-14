const express = require('express');
const router = express.Router();

const root = require('./root');
const users = require('./users');
const records = require('./records');

router.use('/', root);
router.use('/users', users);
router.use('/records', records);

module.exports = router;
