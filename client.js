// you have to run this while the server is running, so you can't run this in this repl. You will have to copy and paste the code into your own client program 
const fetch = require("node-fetch");
const readline = require('readline'); // you will need to install these manually if you aren't in a node repl
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let main = async () => {
  let view;
  await fetch('http://all-of-zem--johnstev111.repl.co/')
    .then(res => res.text())
    .then(text => console.log(text));
  await fetch('http://all-of-zem--johnstev111.repl.co/view')
    .then(res => res.json())
    .then(json => view = json);
  let keys = [];
  view.forEach((program) => {
    keys.push(program["prog-name"]);
  });
  rl.question(`Would you like to view all as json, or view a program? (one of ${keys.join(", ")} or view to view json) `, async (answer) => {
    if (answer == "view") {
      console.clear();
      console.log(JSON.stringify(view, null, 2));
      rl.close();
    } else {
      let supporting = (view[answer]).supports;
      rl.question(`Which program? (one of ${supporting}) `, async (input) => {
        if (supporting.includes(input)) {
          await fetch(`http://all-of-zem--johnstev111.repl.co/${answer}/${input}`)
            .then(res => res.text())
            .then(text => {
              console.clear();
              console.log(`Your code is:\n${text}`);
              rl.close();
            });
        } else {
          console.clear();
          console.log("Incorrect program. Please try again.");
          rl.close();
        }
      })
    }
  });
};
main();