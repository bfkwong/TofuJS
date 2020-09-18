const  exec = require('child_process').exec;

function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
}

const expected = {
    1: '0\n1\n1\n2\n3\n5\n8\n13\n21\n34\n55\n89\n144\n233\n',
    2: '12\n3\n',
    3: 'Bryan\nnull\n',
    4: '1\n'
};

for (let i = 1; i <= 4; i++) {
    execute(`node ./index.js ${i} true`, (output) => {
        if (output === expected[i]) {
            console.log(`Passed test ${i}`);
        } else {
            console.log(`Failed test ${i}`);
            console.log("expected: ",expected[i]);
            console.log("got: ", output);
            process.exit(1);
        }
    });
}
