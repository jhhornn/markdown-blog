const express = require('express');
const mongoose = require('mongoose'); 
const Article = require('./models/article');
const articleRouter = require('./routes/articles'); // imported our routes to several endpoints
const app = express();
const port = 5000;

mongoose.connect('mongodb://127.0.0.1/blog', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs'); // sets the view that is sent to the client side. Contains HTML file

app.use(express.urlencoded({ extended: false })); 


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    res.render('articles/index', { articles: articles });
});

app.use('/articles', articleRouter); // use the routes that are created in the router using /articles as the base for other routes e.g /articles/edit

app.listen(port);