const express = require('express');
const router = express.Router(); 
const auth = require('../middleware/auth')
const messageCtrl = require('../controllers/messagesCtrl');
const multer = require('../middleware/multer-config')
const commentsCtrl = require('../controllers/comments')

router.post('/', auth, multer, messageCtrl.createMessage);
router.put('/:id', auth, multer, messageCtrl.modifyMessage);
router.delete('/:id', auth, messageCtrl.deleteMessage);
router.get('/', auth, multer, messageCtrl.listMessage);
// router.post("/:id/like", auth, messageCtrl.likeMessage);
// router.get('/:id', )
router.get('/:messageId/comments',auth, multer, commentsCtrl.getAllComments);
router.post('/:messageId/comments', auth, multer, commentsCtrl.createComment);


module.exports = router;