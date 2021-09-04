const models = require ('../models');

module.exports = {

    createComment : function(req, res, next){
    const comment = {
        userId: req.body.userId,
        publicationId: req.params.messageId,
        content: req.body.content,
    }
    models.Comment.create(comment).then(result => {
        res.status(201).json({
            message: 'Commentaire crée!'
        });
        })
        .catch((error) => res.status(400).json({ error }));
    },
    getAllComments: function(req, res, next){
        models.Comment.findAll({
            where: {publicationId: req.params.messageId},
            include:{
            model: models.User, 
            }
        }).then(result => {
            res.status(200).json(result);
        })
        .catch((error) => res.status(400).json({ error }));
    },
}