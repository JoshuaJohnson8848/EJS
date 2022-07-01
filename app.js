const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const errController = require('./controllers/404');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use(errController.get404);

app.listen(3000, () => {
  console.log('Server Is Running At PORT 3000');
});
