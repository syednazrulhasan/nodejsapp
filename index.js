const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const input = queryObject.input;

  if (input) {
    const textToWrite = `Input: ${input}\nAdditional Text: This is additional text.`;

    fs.writeFile('output.txt', textToWrite, (err) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error writing to file.');
      } else {
        res.statusCode = 200;
        res.end('File written successfully.');
      }
    });
  } else {
    res.statusCode = 400;
    res.end('Missing input parameter.');
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
