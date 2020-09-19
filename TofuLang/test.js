const fs = require("fs");
const exec = require("child_process").exec;

function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    callback(stdout);
  });
}

fs.readdir("./SampleCode/code", (err, files) => {
  if (err) process.exit();

  files.forEach((file) => {
    const source = `./SampleCode/code/${file}`;
    const expect = `./SampleCode/expected/${file.split(".tofu")[0] + ".txt"}`;

    const exptxt = fs.readFileSync(expect, "utf8");

    execute(`node ./TofuScripter.js ${source}`, (output) => {
      if (output === exptxt) {
        console.log(`Passed test ${source}`);
      } else {
        console.log(`Failed test ${source}`);
        console.log(`exp: ${exptxt}`);
        console.log(`got: ${output}`);
        process.exit(1);
      }
    });
  });
});
