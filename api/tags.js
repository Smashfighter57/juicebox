const { client, getPostsByTagName } = require("../db")

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    const tagName = decodeURIComponent(req.params.tagName)
    
    try {
        const selectedPosts = getPostsByTagName(tagName)
        if (selectedPosts) {
            res.send({
                selectedPosts
            })
        } else {
            next ({
                name: 'PostsNotFound',
                message: 'Posts cannot be found'
            })
        }
    } catch ({ name, message }) {
        next ({ name, message})
    }
});