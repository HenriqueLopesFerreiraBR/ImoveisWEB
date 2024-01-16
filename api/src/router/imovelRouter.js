const express = require('express')
const router = express.Router();
const ImovelController= require('../controller/ImovelController');

router.post('/',ImovelController.create)
router.get('/',ImovelController.getAll)
router.get('/:id',ImovelController.getById)
router.put('/:id',ImovelController.update)
router.delete('/:id',ImovelController.delete)

module.exports = router