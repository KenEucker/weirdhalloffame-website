const https = require('https')
const http = require('http')
const fs = require('fs')
const path = require('path')
const options = {
    secure: false,
}
let server = http

if (options.secure) {
    options.key = fs.readFileSync('key.pem')
    options.cert = fs.readFileSync('cert.pem')
    server = https
}

server.createServer(options, function (req, res) {
    res.write(fs.readFileSync(path.join(__dirname, 'public', 'index.html')))
    res.end()
}).listen(80)