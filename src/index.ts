import http from 'http'

import express from 'express'


const app = express()

app.use(express.json())

//sem express
// const server = http.createServer((request, response) =>{
//     response.statusCode = 200
//     response.setHeader('Content-Type', 'text/plain')
//     response.end('Funcionou 🙃')
// })

const port = 5000

app.get('/', (request, response) => {
    response.status(200).json({
        message: "criado 😎"
    })
})

app.listen(port, () => {
    console.log('Server secees port:  ', port)
})

// server.listen(port, () => {
//     console.log('server funcionando na porta: ', port , '😎')
// })
