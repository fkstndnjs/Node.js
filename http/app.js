const http = require("http");

// 서버 만들기
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("HOME");
  } else if (req.url === "/test") {
    res.write("TEST");
  } else {
    res.write("NOT FOUND");
  }
  res.end();
  req.on('data"');
});

// 서버 열기(포트 번호는 8080)
server.listen(8080);
