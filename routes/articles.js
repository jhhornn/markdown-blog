const express = require('express');
const Article = require('./../models/article');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
})

router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.send('articles/show', { article: article})
})

router.post('/', async (req, res) => {
    let article = new Article({
        title: req.body.title,
        description: req.body.title,
        markdown: req.body.markdown
    })
    try{
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch(e){
        res.render('article/new', {article: article})
    }
    
})

module.exports = router;