const express = require('express');
const router = express.Router();

const db = require('../models')
const User = db.User

module.exports = router