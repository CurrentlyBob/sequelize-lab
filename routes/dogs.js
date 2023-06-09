const router = require('express').Router()
const dogsCtrl = require('../controllers/dogs.js')

// POST
router.post('/', dogsCtrl.create)
router.post('/:dogId/feedings', dogsCtrl.addFeeding)

// GET
router.get('/', dogsCtrl.index)

// PUT
router.put('/:dogId', dogsCtrl.update)

// DELETE
router.delete('/:dogId', dogsCtrl.delete)
module.exports = router
