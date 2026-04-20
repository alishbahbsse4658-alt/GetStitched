const express = require('express');
const router = express.Router();
const {
    getTailors,
    getTailorById,
    createTailor,
    updateTailor,
    deleteTailor
} = require('../controllers/tailorController');

router.route('/').get(getTailors).post(createTailor);
router.route('/:id').get(getTailorById).put(updateTailor).delete(deleteTailor);

module.exports = router;