const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3456;

app.use(express.json());
app.use(cors());

app.use(routes);

app.get('/', (req, res) => {
  res.send({ msg: 'SERVER IS UP' });
});

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
