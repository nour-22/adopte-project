const pool = require('../../db');
const queries = require('./queries');

// 🙌 Get controllers
const getSub = (req, res) => {
  console.log('here');
  pool.query(queries.getSub, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
module.exports = {
  getSub,
};
