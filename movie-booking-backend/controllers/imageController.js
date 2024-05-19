const path = require('path')
const fs = require('fs')

const getImage = async (request, response) => {
    const directory = (__dirname).split('\\controllers')[0]
    const fileName = request.params.fileName
    const filePath = path.join(directory, 'images', fileName);
    console.log(filePath)
    fs.stat(filePath, (error, stat) => {
        if (stat) {
            response.status(201).sendFile(filePath)
        }
        else {
            response.status(409).send("wrong path!!")
        }
    })
}

module.exports = { getImage }