import * as express from 'express'
import { conn } from '../../db'
const router = express.Router()

const potAmount = 10
const profit = 10

router.post('/signup', (req, res, next) => {
  conn.query(`INSERT INTO users(first_name, last_name, username, email, fire_id, balance) VALUES($1, $2, $3, $4, $5, $6)`,[req.body.firstName, req.body.lastName, req.body.username, req.body.email, req.body.fireData.user.uid, 0], (error, results) => {
    if(error) {
      console.log(error)
      res.json({results: {}, err: error})
    } else {
      res.json({results: results, err: {}, user_info: req.body.fireData})
    }
  })
})

router.get('/getGames', (req, res, next) => {
  conn.query(`SELECT matches.id, matches.winner_id, matches.loser_id, matches.pot_amount, matches.player1_id, matches.player2_id, matches.game_id, matches.profit_percent, matches.in_progress, p1.id as p1_id, p1.fire_id, p1.email, p1.first_name, p1.last_name, p1.username, p2.id as p2_id, p2.fire_id as p2_fire_id, p2.email as p2_email, p2.first_name as p2_first_name, p2.last_name as p2_last_name, p2.username as p2_username, g.id as game_id, g.name, g.consoles FROM matches LEFT JOIN games g ON matches.game_id = g.id JOIN users p1 ON matches.player1_id = p1.fire_id LEFT JOIN users p2 ON matches.player2_id = p2.fire_id ORDER BY matches.created_at DESC`, [], (err, results) => {
    if (err) {
      console.log(err)
    }
    res.json(results.rows)
  })
})

router.post('/createGame', (req, res, next) => {
  conn.query(`SELECT id FROM games WHERE name = $1`,[req.body.game], (err, gameResult) => {
    if (err) {
      console.log(err.message)
    }
    conn.query(`INSERT INTO matches(pot_amount, player1_id, game_id, profit_percent, in_progress) VALUES($1,$2,$3,$4,$5) RETURNING *`, [req.body.wager, req.body.userId, gameResult.rows[0].id, profit, false], (error, results) => {
      if (error) {
        console.log(error)
        res.sendStatus(500);
      }
      res.json(results.rows)
    })
  })
})

router.post('/joinGame', (req, res, next) => {
  conn.query(`UPDATE matches SET in_progress = $1, player2_id = $2 WHERE id = $3`, [true, req.body.player2Id, req.body.gameId], (err, results) => {
    if (err) {
      console.log(err)
    }
    res.sendStatus(200);
  })
})

router.get('/grabUserDetails', (req, res, next) => {
  conn.query('SELECT * FROM users WHERE fire_id = $1', [req.query.id], (err, results) => {
    if(err) {
      console.log(err)
    }
    conn.query('SELECT matches.id, matches.winner_id, matches.loser_id, matches.pot_amount, matches.player1_id, matches.player2_id, matches.game_id, matches.profit_percent, matches.created_at, games.id as game_id, games.name, games.consoles FROM matches JOIN games ON games.id = matches.game_id WHERE player1_id = $1 OR player2_id = $1', [req.query.id], (errMatch, resultsMatch) => {
      res.json({user_info: results.rows[0], matches: resultsMatch.rows});
    })
  })
})

module.exports = router