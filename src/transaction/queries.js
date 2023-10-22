const addTransaction = 'insert into public."transaction" values($1,$2,$3,$4)';
const getTransaction = 'select * from public."transaction"';
const getTransactionByUserId =
  'select * from public."transaction" where user_id=$1';

module.exports = {
  addTransaction,
  getTransaction,
  getTransactionByUserId,
};
