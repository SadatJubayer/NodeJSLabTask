const express = require('express');
const boydParser = require('body-parser');
const bodyParser = require('body-parser');

// Routers
const loginController = require('./controller/loginController');
const employeeController = require('./controller/employeeController');
const adminController = require('./controller/adminController');

// App initialization
const app = express();

// Config
const PORT = 5000;
app.set('view engine', 'ejs');

// Middleware
app.use(bodyParser());
app.use('/login', loginController);
app.use('/admin', adminController);
app.use('/employee', employeeController);

// Initial route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Server
app.listen(PORT, () => {
  console.log('Server is running at ', PORT);
});
