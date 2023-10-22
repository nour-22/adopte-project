// import fetch from 'node-fetch';

const pool = require('../../db');
const queries = require('./queries');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const simpleAddUser = async (req, res) => {
  console.log(req.body);
  const { id, name, card_number, cvv } = req.body;

  pool.query(
    queries.addUser,
    [id, name, card_number, cvv],
    (error, results) => {
      if (error) throw error;
      console.log('user created in database');
    },
  );

  // create payment user
  const paymentBody = {
    cvv,
    card_number,
    user_id: id,
  };

  const response = await fetch('http://adopteundev.adopteunmec.com:3042/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(paymentBody),
  });

  const data = await response.json();

  console.log(data);

  res.status(201).send('created successfully');
};

const updateUser = (req, res) => {
  console.log(req.params);
  const user_id = parseInt(req.params.id);
  const { card_number, cvv } = req.body;

  pool.query(queries.getUserById, [user_id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send('user does not exits');
    }

    pool.query(
      queries.updatUser,
      [card_number, cvv, user_id],
      (error, results) => {
        if (error) throw error;
        res.status(200).send('updated successfully');
      },
    );
  });
};
module.exports = {
  simpleAddUser,
  updateUser,
  getUsers,
};
