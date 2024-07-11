const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

const snippetRoutes = require('./routes/snippetRoutes');
// const userRoutes = require('./routes/userRoutes');

app.use('/api/snippet', snippetRoutes);
// app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define routes
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});