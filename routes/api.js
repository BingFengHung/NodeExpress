const express = require('express') 
const router = express.Router()

router.get('/', function(req, res) {
  res.json({
    'time': new Date(),
    'data': 'Hello'
  })
})

router.get('/message/:msg', function(req, res) {
  const { msg } = req.params

  res.json({
    'time': new Date(),
    'data': msg
  })
})

module.exports = router;