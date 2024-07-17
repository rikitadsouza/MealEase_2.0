const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define routes here (we'll add them later)
const recipeRoutes = require('./routes/recipes');
app.use('/api/recipes', recipeRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));