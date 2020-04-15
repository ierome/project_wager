import { isObject } from "util"

  let allRooms = {
    general: [],
    fortniteSearch: []
  }

  export function init(io) {
  
    io.on('connection', socket => {
      allRooms.general.push(socket)
      socket.on('append user', (id) => appendUser(id, socket))
      socket.on('disconnect', () => disconnectUser(socket))
      socket.on('GAME_CREATED', () => io.sockets.emit('UPDATE_GAMES'))
      socket.on('join-room', (room) => {
        socket.join(room, () => allRooms[room].push(socket))
        findMatch(socket).then(resp => {
          io.to(socket.id).emit('match-found', resp.id)
        })
        .catch(e => {
          io.to(socket.id).emit('no-games-found')
        })
      })
    })
  }

  function disconnectUser(socket) {
    for (const room in allRooms) {
      allRooms[room].forEach((user,i) => {
        if (user.id === socket.id) {
          allRooms[room].splice(i, 1)
        }
      })
    }
  }

  function findMatch(socket): Promise<any> {
    let opponent = null
    if (allRooms['fortniteSearch'].length > 0) {
      opponent = allRooms['fortniteSearch'][0]
      console.log(socket.id + " as " + socket.userId + " Playing " + opponent.id + " as " + opponent.userId)
      return Promise.resolve(opponent);
    } else {
      return Promise.reject(new Error('No opponent found'))
    }
  }

  function appendUser(id, socket) {
    for (const room in allRooms) {
      allRooms[room].forEach((user,i) => {
        if (user.id === socket.id) {
          console.log(user.id + " is now user ID " + id)
          user.userId = id;
        }
      })
    }
  }