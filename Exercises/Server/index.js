const http = require('http');
const url = require('url'); //this one
const port = 8001;

const users = [
    {id: 0, name: 'Zehava'},
    {id: 1, name: 'Bar Gil'}
]

const server = http.createServer((req, res) =>{

    const q = url.parse(req.url, true).query;//this one
    console.log(q)//this one
    if (req.method === 'GET'){
        if (req.url === '/getAll'){
            res.write('Hello!');
         } else if (req.url.includes('/user')){//this one
            res.write(JSON.stringify(users[q.id]));//this one
         }
    }
    res.end();     
})

server.listen(port, () =>{
    console.log('server run at port' + port);
});