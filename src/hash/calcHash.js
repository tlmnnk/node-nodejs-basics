import * as url from 'url';
import { createHash } from 'crypto';
import { resolve } from 'path';

const __dir = url.fileURLToPath(new URL('.', import.meta.url));

const FILES = './files/';
const FILE_NAME = 'fileToCalculateHashFor.txt';
const FILE_READ_PATH = resolve(__dir, FILES, FILE_NAME);

const calculateHash = async () => {
    const hash = createHash('sha256').update(FILE_READ_PATH).digest('hex');
    console.log(hash);
};

await calculateHash();
