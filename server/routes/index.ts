import * as express from 'express'
import * as path from 'path'
const router = express.Router()

router.get("*", (req, res, next) => {
  res.sendFile(path.resolve('public/index.html'))
})

module.exports = router