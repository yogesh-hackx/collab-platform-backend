const express = require('express')
const router = express.Router()
const user = require("./user")

router.get('/', async (req, res) => {
  res.send('Hello World! :)')
})

module.exports = router
