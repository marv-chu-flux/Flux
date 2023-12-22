const express = require('express');
const addModels = require('./middleware/addModels');
const controllers = require('./controllers');

const router = express.Router();

router.use(addModels);

router.get('/hi', controllers.create);

module.exports = router;
