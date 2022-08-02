const express = require('express')
const app = express()
const axios = require('axios')

app.get('/:id', async (req, res) => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://swapi.dev/api/people/' + req.params.id,
    })
    console.log('Respuesta de la peticion:', response)
    return res.json(response.data)
  } catch (err) {
    console.log('Error de la peticion', err)
    res.status(err.response.status).json({ message: err.response.statusText })
  }
})

module.exports = app
