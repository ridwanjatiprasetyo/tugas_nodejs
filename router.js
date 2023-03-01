const tugasController = require('./controller/tugasController')
const middleware = require('./middleware/middleware')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })

module.exports = app => {
    app.post('/tugas', jsonParser, middleware.validasi_tugas, tugasController.createTugas)
    app.get('/tugas', tugasController.findAllTugas)
    app.get('/tasks/:id', urlencodedParser, middleware.validasi_find_tugas, tugasController.findTugas)
    app.delete('/tasks/:id', urlencodedParser, middleware.validasi_find_tugas, tugasController.deleteTugas)
    app.patch('/tasks/:id', urlencodedParser, jsonParser, middleware.validasi_update_tugas, tugasController.updateTugas)
}