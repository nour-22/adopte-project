const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTransactions);
router.get('/:user_id', controller.getTransactionByUserId);
router.post('/ca', controller.getTransactionSumByPeriod);

module.exports = router;
