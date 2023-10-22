const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.post('/', controller.simpleAddUser);
router.put('/:id', controller.updateUser);
router.get('/', controller.getUsers);

module.exports = router;
