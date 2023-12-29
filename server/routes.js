const express = require('express');
const addModels = require('./middleware/addModels');
const controllers = require('./controllers');

const router = express.Router();

router.use(addModels);

router.get('/cart', controllers.list);
router.post('/cart', controllers.create);
router.delete('/cart:id', controllers.destroy);
router.patch('/cart:id', controllers.update);
router.delete('/cart', controllers.destroyAll);

module.exports = router;
