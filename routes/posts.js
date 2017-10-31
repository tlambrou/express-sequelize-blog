var express = require('express');
var router = express.Router({mergeParams: true});

var models  = require('../db/models');

router.get('/new', function(req, res, next) {
   	res.render('posts-new', {})
});

router.get('/:id', function(req, res, next) {
    models.Post.findById(req.params.id).then(post => {
        post.getComments().then(comments => {
            res.render('posts-show', {post: post, comments: comments})    
        });
    });
});

router.post('/', (req,res) => {
	req.body.userId = req.params.id;

	models.Post.create(req.body).then(post => {
		res.redirect('/')
	});
});

module.exports = router;
