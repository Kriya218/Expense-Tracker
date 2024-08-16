const express = require('express');
const router = express.Router();

const authHandler = require('../middlewares/auth-handler');

const root = require('./root');
const users = require('./users');
const records = require('./records');

router.use('/', root);
router.use('/users', users);
router.use('/records', authHandler, records);

module.exports = router;
