const router = require('express').Router()


router.get('/hey', (req, res) => {
  return res.send('hey')
})

module.exports = router
