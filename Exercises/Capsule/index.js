const http = require("http");
const url = require('url');
const data = require('./user.json');
const port = 8001;

console.log(data);

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true).query;
  if (req.method === 'GET') {
    if (req.url.includes('id')) {
      let user = data.users.find(e => e.id == q.id)
      res.write(JSON.stringify(user))
    }
    else if (req.url.includes('capsule')) {
      let user = data.users.filter(e => e.capsule == q.capsule )
      res.write(JSON.stringify(user))
    }
  }
  res.end()
})
server.listen(port, () => {
  console.log('server run at 8001');
})