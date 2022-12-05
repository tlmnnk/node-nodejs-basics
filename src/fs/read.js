import { resolve } from 'path';
import { access, constants, readFile  } from 'fs/promises'; 
import * as url from 'url';

const __dir = url.fileURLToPath(new URL('.', import.meta.url));
const ERR_MESSAGE = 'FS operation failed';

const FILES = './files/';
const FILE_READ_NAME = 'fileToRead.txt';
const FILE_READ_PATH = resolve(__dir, FILES, FILE_READ_NAME);

const isFileExist = async (filepath) => {
    try {
        await access(filepath, constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
};


const read = async () => {
    if (!(await isFileExist(FILE_READ_PATH))) throw new Error(ERR_MESSAGE);
    const content = await readFile(FILE_READ_PATH, { encoding: 'utf8' });
    console.log(content);
};

await read();
