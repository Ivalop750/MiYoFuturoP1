
//User   {id: Number, name: String , passwd: String}
//Blog   {id: Number, name: String , creatorID: Number}
//Post   {id: Number, text: String,  authorID: Number}
//Posts  {'blogID':{'postID1': .., 'postID2': ...}}

let Alumnos = {}
let Universidades = {}
let Institutos = {}


// ADRIAN

exports.getInstitutoData = id =>{
	//console.log('Este es el id de Instituto: '+id)
	return Institutos[id] || "null"
} 

exports.getInstitutos = _ => Object.keys(Institutos).map(k => ({id: Institutos[k].id, name: Institutos[k].name, telephone: Institutos[k].telephone, address:Institutos[k].address}))

exports.createInstituto = data => {
	if (!data.id || !data.name)
		return 'KO'
	
	if (Institutos[data.id])
		Institutos[data.id] = Object.assign(Institutos[data.id], data)
	else
		Institutos[data.id] = data
	return 'OK'
}


exports.removeInstituto = id => {
	if (Institutos[id]){
		delete Institutos[id]
		return 'OK'
	}
	else
	  return 'KO'
}


// AARON

exports.getAlumnos 	= () => Object.keys(Alumnos).map(k => ({id: Alumnos[k].id, name: Alumnos[k].name}) )
							  
exports.getAlumnoData 	= id => Alumnos[id] || null

exports.createAlumno 	= (data, eve) => {
	//check if data is valid
	if (!data.id || !data.name /*|| !data.creatorID*/)
		return 'KO'
	
    if (Alumnos[data.id])
	    Alumnos[data.id] = Object.assign(Alumnos[data.id], data)
	else {
		Alumnos[data.id] = data
		eve.send(JSON.stringify(data), "updates")
	}
	
	return 'OK'
}

exports.removeAlumno = id => {
      if (Alumnos[id]){
		  delete Alumnos[id]
    	  return 'OK'
      }
      else
	    return 'KO'
}

//Ivan
exports.getUniversidades = () => Object.keys(Universidades).map(k => (
	{id: Universidades[k].id, name: Universidades[k].name, address: Universidades[k].address, type: Universidades[k].type, webpage: Universidades[k].webpage }) )

exports.getUniversidadData = id => {
	//console.log('Este es el id de Instituto: '+id)
	return Universidades[id] || "null"
} 


exports.createUniversidad = data => {
	//console.log("DATOS del create: " + JSON.stringify(data))
    if (!data.id || !data.name)
		return 'KO'
	
    if (Universidades[data.id])
	    Universidades[data.id] = Object.assign(Universidades[data.id], data)
	else
		Universidades[data.id] = data
	return 'OK'
    
}

exports.removeUniversidad = id => {
	//console.log("Este es el id: "+ id)
	//console.log("Esto es universidades[id]: "+Universidades[id] )
	//console.log("ANTES - Universidades "+ JSON.stringify(Universidades))
      if (Universidades[id]){
		  delete Universidades[id]
		  //console.log("DESPUES - Universidades "+ JSON.stringify(Universidades))
    	  return 'OK'
      }
      else
	    return 'KO'
}
