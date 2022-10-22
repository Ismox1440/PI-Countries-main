errorCreator = (message, status = 400, aditionalInfo) => {
    const newErr = new Error(message)
    newErr.status = status
    if(newErr) newErr.aditional = aditionalInfo
    return newErr
}

const buscarUndefined = (obj) => {
    const datosFaltantes = []
    for(const property in obj) {
        if(!obj[property]) datosFaltantes.push(property)
    }
    return datosFaltantes
}

module.exports = {
    errorCreator,
    buscarUndefined
}