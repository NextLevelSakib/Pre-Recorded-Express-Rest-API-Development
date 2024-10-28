const express = require('express');
const router = express.Router()
const HelloController = require('../controllers/HelloController.js')

//This Is My First Get Routing
router.get('/hello-get', HelloController.Hello)

//This Is My First Post Routing
router.post('/hello-post', HelloController.HelloPost)

//This Is My First Put Routing
router.put('/hello-put', HelloController.Hello)

//This Is My First Delete Routing
router.delete('/hello-delete', HelloController.HelloPost)



module.exports = router;




