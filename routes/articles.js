const express = require('express');
const Article = require('./../models/article.js');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
})

router.get('/:slug', async (req, res) => {
    const article = await Article.find({slug: req.params.slug});
    if (article ==  null) res.redirect('/')
    res.render('articles/show', { article: article})
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