var express = require('express');
var router = express.Router();

const emailController = require('../controllers/email');



router.get('/compose', emailController.composeEmail);

router.post('/sendEmail',emailController.sendEmail);

router.get('/sender/:senderName', emailController.getEmailsBySender);

router.get('/:id', emailController.readEmail);

router.post('/:id/delete', emailController.deleteEmail);

router.post('/:id/archive', emailController.archiveEmail);

router.get('/', emailController.getEmails);
  

module.exports = router;
