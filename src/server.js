const http = require('http');
const fs = require('fs');
const generateDay = require('./helpers/generateDay');

const server = http.createServer((req, res) => {
  if(req.url === '/generate-day'){
    const data = fs.readFileSync(__dirname + '/source.json');
    const jsonData = JSON.parse(data);
    const day = generateDay(jsonData).join(' | '); 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(
      `Work hours: ${jsonData.workHours.start} to ${jsonData.workHours.end}
Period: ${jsonData.period}
Available hours: ${day}`
      
    );
    return res.end();
  }
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<a href="generate-day" > generate day</a>')
  res.end();
});



server.listen(3000, () => {
  console.log('sever started!');
});