const db = require("../models/index");



// Création message


exports.createMessage = (req, res, next) => {
  let attachment
  if (req.file) {
    attachment = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  }
  const message = db.Message.build({
    UserId: res.locals.userId,
    title: req.body.title,
    content: req.body.content,
    attachment: attachment,
    likes: 0,
    // usersLiked: [],
  });
  message
    .save()
    .then(() => res.status(201).json({ message: "Message enregistré !" }))
    .catch((error) => res.status(400).json({ error }));
};

//Lister les messages


exports.listMessage = (req, res, next) => {
  let order = req.query.order;
  db.Message.findAll({
    order: [order != null ? order.split(":") : ["createdAt", "DESC"]],
    include: [
      {
        model: db.User,
        attributes: ["pseudo"],
      },
    ],
  })
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(400).json({ error }));
}


//Supprimer message
exports.deleteMessage = (req, res, next) => {

  if (!res.locals.isAdmin) {
    db.Message.destroy({
      where: {
        id: req.params.id, UserId: res.locals.id
      }


    })
      .then(() => res.status(200).json({ message: "Message supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
  } else {
    db.Message.destroy({
      where: {
        id: req.params.id
      }

    })
      .then(() => res.status(200).json({ message: "Message supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
  }
}
  exports.getOneMessage = (req, res, next) => {
    db.Message.findOne({
      where: { id: req.params.id },
    })
      .then(message => res.status(200).json(message))
      .catch(error => res.status(400).json({ error }));
  }