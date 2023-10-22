const pool = require('../../db');
const userSubQueries = require('./queries');
const subQueries = require('../subscription/queries');
const transactionQueries = require('../transaction/queries');

const subscribe = (req, res) => {
  console.log(req.body);
  const { id, renew, creation_date, end_date, user_id, sub_id } = req.body;

  pool.query(subQueries.getSubById, [sub_id], (error, subRes) => {
    if (error) throw error;
    if (subRes.rows.length === 0) throw error;

    const subscription = subRes.rows[0];

    // create the use_sub entity
    pool.query(
      userSubQueries.addUserSub,
      [id, renew, creation_date, end_date, user_id, sub_id],
      async (error, results) => {
        if (error) throw error;

        // call transaction api

        const transactionBody = {
          user_id,
          amount: subscription.amount,
        };

        const response = await fetch(
          'http://adopteundev.adopteunmec.com:3042/transaction',
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(transactionBody),
          },
        );

        const data = await response.json();
        console.log('payment Response : ');
        console.log(data);

        // save transaction in db
        pool.query(
          transactionQueries.addTransaction,
          [id, creation_date, subscription.amount, user_id],
          (error, results) => {
            if (error) throw error;

            console.log(' transaction created successfully');
          },
        );
        res.status(200).send('sucess');
      },
    );
  });
};

module.exports = {
  simpleAddUserSub: subscribe,
};
