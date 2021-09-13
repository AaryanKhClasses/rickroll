// Importing Modules
const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => res.sendFile('index.html', { root: path.join(__dirname, './public/') })) // Main Page
app.get('/generate', (req, res) => res.sendFile('generate.html', { root: path.join(__dirname, './public/') })) // Main Page
app.get('/:url', (req, res) => { res.redirect('https://youtu.be/dQw4w9WgXcQ') }) // Rickroll URL

app.listen(3000, () => console.log('Application listening on port 3000!')) // Listening on port 3000