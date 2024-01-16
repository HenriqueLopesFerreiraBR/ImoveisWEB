const express = require('express')
const router = express.Router();
const ContratoController= require('../controller/ContratoController');

router.post('/',ContratoController.create)
router.get('/',ContratoController.getAll)
router.get('/:id',ContratoController.getById)
router.put('/:id',ContratoController.update)
router.delete('/:id',ContratoController.delete)

module.exports = router