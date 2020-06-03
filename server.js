const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');
const userApi = require('./routes/user');
const signUpApi = require('./routes/signup');
const postApi = require('./routes/posts');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('connected to database'));

app.use(express.json());

app.use('/api', apiRouter);
app.use('/api/user', userApi);
app.use('/api/posts', postApi);
app.use('/api/signup', signUpApi);

app.listen(process.env.PORT || 3000, () => console.log('server started'));
