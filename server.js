const http = require("http");
const fs = require("fs");
let jsonGen = () => {
  let objects = [];
  (fs.readdirSync("programs")).forEach((element) => {
    let supports = [];
    (fs.readdirSync(`programs/${element}`)).forEach((file) => {
      if (file.slice(0, 4) == "main") supports.push(file.slice(5));
    });
    objects.push({
      "program": element,
      "supports": supports
    });
  });
  return objects;
};
http.createServer((req, res) => {
  const headers = {
    "Content-Type": "text/plain",
    "Access-Control-Allow-Origin": "*"
  };
  let url = req.url.split("/");
  if (req.method == "GET") {
    try {
      res.writeHead(200, headers);
      if (url[1] == "view") res.end(JSON.stringify(jsonGen(), null, 2));
        else if (url.length == 2 && url[1] == "") res.end("Hey, just type the program/file after the url!\nFor example: go to https://All-of-zem--johnstev111.repl.co/tester/erd to get the erd file of the tester-game!\nGo to https://All-of-zem--johnstev111.repl.co/view to see each program!");
        else res.end(fs.readFileSync(`programs/${url[1]}/main.${url[2]}`));
    } catch {
      res.writeHead(404, headers);
      res.end("404: Page not found\nHuh. That was a problem. Return to start?");
    }
  }
}).listen();
