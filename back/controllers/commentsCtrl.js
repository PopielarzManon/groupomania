const db = require ('../models/index');

exports.createComment = (req, res, next) =>{
    const comment = db.Comment.build({
        userId: req.locals.userId,
        publicationId: req.locals.messageId,
        content: req.body.content,
    });
    comment
    .save()
    .then(() => res.status(201).json({ message: "Commentaire enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
},



    exports.getAllComments = (req, res, next)=>{
        db.Comment.findAll({
            where: {messageId: req.params.messageId},
            include:{
            model: db.User, 
            }
        }).then(result => {
            res.status(200).json(result);
        })
        .catch((error) => res.status(400).json({ error }));
    }