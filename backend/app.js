
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const mongoUri = 'mongodb://admin:password@mongodb:27017/mydatabase?authSource=admin';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
