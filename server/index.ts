import * as express from 'express'
import * as http from 'http'
import * as config from 'config'
import { init } from './searching'
const app = express()
const server = new http.Server(app)
const io = require('socket.io')(server)

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static('public'))

app.use('/api/payments', require('./routes/api/payments'))
app.use('/api', require('./routes/api'))
app.use('/', require('./routes'))

app.use(function(err, req, res, next){
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({
    err: err,
    redirect: true
  })
 })

 init(io)


server.listen(8000, () => {
  console.log("Server listening on port 8000")
})