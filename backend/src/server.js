const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const { notFoundURL, catchErrors } = require('./middleware/errorsMiddleware');

const port = process.env.PORT || 5000;

connectDB();

if (process.env.NODE_ENV === 'production') {
  app.use(cors({ credentials: true, origin: true }));
} else {
  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
}
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/clients', require('./routes/clients'));
app.use('/api/tasks', require('./routes/tasks'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('App is in dev mode'));
}

app.use(notFoundURL);
app.use(catchErrors);

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
