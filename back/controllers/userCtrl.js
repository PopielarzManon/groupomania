const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');



// Creation compte
exports.signup = (req, res, next) => { 
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
      const user = new User.build ({
          
          email: req.body.email,
          pseudo: req.body.pseudo,
          password: hash,
          bio: req.body.bio,
          isAdmin: 0
      });
      user.save()
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
      .catch(error => res.status(400).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};







// Login
exports.login = (req, res, next) => {
  User.findOne({
        where: { email: req.body.email }
  }) 
  .then(user => {
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
    }
    bcrypt.compare(req.body.password, user.password) 
      .then(valid => {
        if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          user: user.pseudo,
          isAdmin: user.isAdmin,
          userId: user.id, 
          token: jwt.sign(
              { userId: user.id }, 
              process.env.DB_TOKEN, 
              { expiresIn: '12h' } 
          )
        });
      })
      .catch(error => res.status(500).json({ error }));
  })
  .catch(error => res.status(500).json({ error }));
};