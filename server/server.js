const express = require('express');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const PORT = 3456;

app.use(express.json());
app.use(cors());

//setting public files
// const publicDir = path.join(__dirname, '../client');
// const staticAssets = express.static(publicDir);
// app.use(staticAssets);

// app.use(routes);

app.get('/api', (req, res) => {
  res.send({ msg: 'hi' });
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});
