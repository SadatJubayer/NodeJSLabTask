const express = require('express');
const boydParser = require('body-parser');
const bodyParser = require('body-parser');

// Routers
const loginController = require('./controller/loginController');

// App initialization
const app = express();

// Config
const PORT = 5000;
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser());
app.use('/login', loginController);

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log('Server is running at ', PORT);
});
