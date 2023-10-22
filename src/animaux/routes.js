const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAnimaux);
router.post('/', controller.simpleAddAnimaux);
router.get('/:id', controller.getAnimauxById);
router.delete('/:id', controller.removeAnimaux);
router.put('/:id', controller.updateAnimaux);

module.exports = router;
