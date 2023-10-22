const express = require('express');

const userRoutes = require('./src/user/routes');
const subRoutes = require('./src/subscription/routes');
const userSubRoutes = require('./src/user_sub/routes');
const userTransactions = require('./src/transaction/routes');

const app = express();
const port = 3000;

// Add middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/user', userRoutes);
app.use('/api/sub', subRoutes);
app.use('/api/usersub', userSubRoutes);
app.use('/api/transaction', userTransactions);

app.listen(port, () => console.log(`app listening on port ${port}`));
