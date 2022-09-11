const express = require('express');
const articleRouter = require('./routes/articles'); // imported our routes to several endpoints
const app = express();
const port = 5000;


app.set('view engine', 'ejs'); // sets the view that is sent to the client side. Contains HTML file

app.use('/articles', articleRouter); // use the routes that are created in the router using /articles as the base for other routes e.g /articles/edit


app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: Date.now(),
        description: 'Test description',
    }];
    res.render('index', {articles: articles});
});

app.listen(port);