const pool = require('../../db');
const queries = require('./queries');

const getTransactions = (req, res) => {
  pool.query(queries.getTransaction, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getTransactionByUserId = (req, res) => {
  const user_id = parseInt(req.params.user_id);
  pool.query(queries.getTransactionByUserId, [user_id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getTransactionSumByPeriod = (req, res) => {
  const { creation_date, end_date } = req.body;
  pool.query(
    queries.getTransactionSumByPeriod,
    [creation_date, end_date],
    (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    },
  );
};

module.exports = {
  getTransactions,
  getTransactionByUserId,
  getTransactionSumByPeriod,
};
