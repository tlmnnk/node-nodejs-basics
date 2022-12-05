import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    const child = spawn('node', args);

    process.stdin.pipe(child.stdout);

    child.stdin.on('data', (data) => {
        console.log('Child process stdin: ', data.toString());
    });

    child.stdout.on('data', (data) => {
        console.log('Child process stdout: ', data.toString());
        process.stdout.write(data);
    });
};

spawnChildProcess(['src/cp/files/script.js', 'one']);
