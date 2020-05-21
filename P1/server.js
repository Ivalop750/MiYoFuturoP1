const bodyparser = require('body-parser')
const express    = require('express')

const control = require('./controllers')

const app = express() //API Main object

const SSE = require('express-sse');
const streamEventos = new SSE();

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(control.middleware) //Done

app.use('/web', express.static('public'))

app.get('/news', control.eventStream) //Stream of Server-side events

//etc ...


app.get('/stream', streamEventos.init);


// ADRIAN

app.get('/instituto/:id',control.getInstitutoData)

app.get('/instituto',control.getInstitutos)

app.post('/instituto',control.createInstituto)

app.delete('/instituto/:id',control.removeInstituto)


// AARON

app.get('/alumno/', control.getAlumnos) //Done

app.get('/alumno/:id', control.getAlumnoData ) //Done

app.post('/alumno', control.createAlumno ) //Done

app.delete('/alumno/:id', control.removeAlumno ) //Done


//IVAN
app.get('/universidad/:id',control.getUniversidadData)

app.get('/universidad',control.getUniversidades)

app.post('/universidad',control.createUniversidad)

app.delete('/universidad/:id',control.removeUniversidad)



const PORT = 8000
app.listen(PORT, _ => console.log(`Servidor web escuchando en puerto ${PORT}`))
