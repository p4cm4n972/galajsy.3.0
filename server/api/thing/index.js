'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

router.get('/articles', controller.index);
router.get('/articles:id', controller.show);
router.post('/articles', controller.create);
router.put('/articles:id', controller.upsert);
router.patch('/articles:id', controller.patch);
router.delete('/articles:id', controller.destroy);

module.exports = router;
