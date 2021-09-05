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

//Modifier Message

exports.modifyMessage = (req, res, next) => {
  db.Message.update(
    {
      content: req.body.content,
    },
    { where: { id: res.locals.userId } }
  )
    .then(() => res.status(200).json({ message: "Message modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

//Supprimer message
exports.deleteMessage = (req, res, next) => {
  db.Message.destroy({
    where: { id: res.locals.userId },
  })
    .then(() => res.status(200).json({ message: "Message supprimé !" }))
    .catch((error) => res.status(400).json({ error }));
};
// //Likes

// exports.likeMessage = (req, res, next) => {
//   const messageObject = req.body;

//   if (messageObject.like === 1) {
//     Message.updateOne(
//       { _id: req.params.id },
//       {
//         $inc: { likes: +1 },
//         $push: { usersLiked: req.body.userId },
//       }
//     )
//       .then(() =>
//         res.status(200).json({ message: "Vous aimez cette sauce ! Miam" })
//       )
//       .catch((error) => res.status(400).json({ error }));
//   } else if (messageObject.like === -1) {
//     Message.updateOne(
//       { _id: req.params.id },
//       {
//         $inc: { dislikes: +1 },
//         $push: { usersDisliked: req.body.userId },
//       }
//     )
//       .then(() =>
//         res.status(200).json({ message: "Vous n'aimez pas la sauce...Beurk" })
//       )
//       .catch((error) => res.status(400).json({ error }));
//   } else {
//     Message.findOne({ _id: req.params.id })
//       .then((sauce) => {
//         if (sauce.usersLiked.includes(req.body.userId)) {
//           Sauce.updateOne(
//             { _id: req.params.id },
//             {
//               $pull: { usersLiked: req.body.userId },
//               $inc: { likes: -1 },
//             }
//           )
//             .then(() =>
//               res
//                 .status(200)
//                 .json({ message: "Like en moins " })
//             )
//             .catch((error) => res.status(400).json({ error }));
//         } else if (message.usersDisliked.includes(req.body.userId)) {
//           Message.updateOne(
//             { _id: req.params.id },
//             {
//               $pull: { usersDisliked: req.body.userId },
//               $inc: { dislikes: -1 },
//             }
//           )
//             .then(() =>
//               res.status(200).json({ message: "Like en plus!" })
//             )
//             .catch((error) => res.status(400).json({ error }));
//         }
//       })
//       .catch((error) => res.status(400).json({ error }));
//   }
// };

