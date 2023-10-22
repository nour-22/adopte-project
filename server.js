const express = require('express');

const animauxRoutes = require('./src/animaux/routes');

const app = express();
const port = 3000;

// Add middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello');
});

app.use('/api/animaux', animauxRoutes);
// app.use('/api/test', testRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
