const M = require('./model')

const SSE = require('express-sse') //Server-side events


exports.middleware = (req, res, next) => {

	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', '*')
	res.header('Access-Control-Allow-Headers',
			   'Origin, Content-Type, Accept',)
    res.header('Cache-Control', 'no-cache')


	/*
	//Todas las llamdas REST con token: user/345?token=asCDSAsa
	if (req.query && req.query.token != 'asCDSAsa'){ //Security token

		res.status(403)
		return
	}
	*/

	next()
}

const STREAM = new SSE()

exports.eventStream = (req, res) => {

  console.log('Nueva conexion SSE ...')

  STREAM.init(req, res)

}


const streamEventos = new SSE()

exports.eventStream = (req, res) => {

  console.log('Nueva conexion SSE ...')

  STREAM.init(req, res)

}

// streamEventos.send(JSON.stringify(evento));

// ADRIAN

exports.getInstitutoData = async (req,res) => res.send({result: await M.getInstitutoData(req.params.id)})

exports.getInstitutos = async (req,res) => res.send({result: await M.getInstitutos()})

exports.createInstituto = async (req,res) =>  res.send({result: await M.createInstituto(req.body)})

exports.removeInstituto = async (req,res) => res.send({result: await M.removeInstituto(req.params.id)})



// AARON

exports.getAlumnos 	= async (req, res) => res.send({result: await M.getAlumnos()}) //GET

exports.getAlumnoData 	= async (req, res) => res.send({result: await M.getAlumnoData(req.param.id)}) //GET

exports.createAlumno	= async (req, res) => res.send({result: await M.createAlumno(req.body, streamEventos)}) //POST

exports.removeAlumno	= async (req, res) => res.send({result: await M.removeAlumno(req.param.id)}) //DELETE


//IVAN
exports.getUniversidadData = async (req,res) => res.send({result: await M.getUniversidadData(req.params.id)})

exports.getUniversidades = async (req,res) => res.send({result: await M.getUniversidades()})

exports.createUniversidad = async (req,res) => res.send({result: await M.createUniversidad(req.body)})

exports.removeUniversidad = async (req,res) => res.send({result: await M.removeUniversidad(req.params.id)})


