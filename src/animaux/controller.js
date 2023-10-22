const pool = require('../../db');
const queries = require('./queries');

// 🙌 Get controllers
const getAnimaux = (req, res) => {
  console.log('getting animaux');
  pool.query(queries.getAnimaux, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getAnimauxById = (req, res) => {
  console.log('gettin by id');
  const id = parseInt(req.params.id);
  pool.query(queries.getAnimauxById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

// ➕ contollers
// Add with check constaint example
const addAnimaux = (req, res) => {
  console.log(req.body);
  const { name, weight, description } = req.body;

  pool.query(queries.checkNameExists, [name], (error, results) => {
    if (results.rows.length) {
      res.send('name already exists');
    }

    pool.query(
      queries.addAnimaux,
      [name, description, weight],
      (error, results) => {
        if (error) throw error;
        res.status(201).send('created successfully');
        console.log('animaux created');
      },
    );
  });
};

// simple add
const simpleAddAnimaux = (req, res) => {
  console.log(req.body);
  const { name, weight, description } = req.body;

  pool.query(
    queries.addAnimaux,
    [name, description, weight],
    (error, results) => {
      if (error) throw error;

      res.status(201).send('created successfully');
      console.log('animaux created');
    },
  );
};

// ➖ remove
const removeAnimaux = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getAnimauxById, [id], (error, results) => {
    const noAnimauxFound = !results.rows.length;
    if (noAnimauxFound) {
      res.send('animaux does not exits');
    }

    pool.query(queries.removeAnimaux, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send('DELETED');
    });
  });
};

// 💅 update
const updateAnimaux = (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const { Name } = req.body;

  pool.query(queries.getAnimauxById, [id], (error, results) => {
    const noAnimauxFound = !results.rows.length;
    if (noAnimauxFound) {
      res.send('animaux does not exits');
    }

    pool.query(queries.updateAnimaux, [Name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send('updated successfully');
    });
  });
};

module.exports = {
  getAnimaux,
  simpleAddAnimaux,
  getAnimauxById,
  addAnimaux,
  removeAnimaux,
  updateAnimaux,
};
