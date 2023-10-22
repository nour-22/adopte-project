const addTransaction = 'insert into public."transaction" values($1,$2,$3,$4)';
const getTransaction = 'select * from public."transaction"';
const getTransactionByUserId =
  'select * from public."transaction" where user_id=$1';
const getTransactionSumByPeriod =
  'select SUM(amount) from public."transaction" where creation_date >= $1::date and creation_date <= $2::date';

module.exports = {
  addTransaction,
  getTransaction,
  getTransactionByUserId,
  getTransactionSumByPeriod,
};
