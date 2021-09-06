const db = require ('../models/index');

exports.createComment = (req, res, next) =>{
    console.log(req.body)
    const comment = db.Comment.build({
        userId: res.locals.userId,
        messageId: req.params.messageId,
        content: req.body.content,
    });
    comment
    .save()
    .then(() => res.status(201).json({ message: "Commentaire enregistré !", comment}))
    .catch((error) => res.status(400).json({ error }));
},



    exports.listComments = (req, res, next)=>{
        let order = req.query.order;
        db.Comment.findAll({
            order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
            include: [
                {
                  model: db.User,
                  attributes: ["pseudo"],
                },
            ]
        }).then(result => {
            res.status(200).json(result);
        })
        .catch((error) => res.status(400).json({ error }));
    }