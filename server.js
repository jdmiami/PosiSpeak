require('dotenv').config();

const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log(err));


app.use('/api/user', authRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


