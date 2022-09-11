const express = require('express');
const mongoose = require('mongoose'); 
const articleRouter = require('./routes/articles'); // imported our routes to several endpoints
const app = express();
const port = 5000;

// mongoose.connect('mongodb://localhost/blog')

app.set('view engine', 'ejs'); // sets the view that is sent to the client side. Contains HTML file

app.use('/articles', articleRouter); // use the routes that are created in the router using /articles as the base for other routes e.g /articles/edit


app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description',
    }];
    res.render('articles/index', {articles: articles});
});

app.listen(port);