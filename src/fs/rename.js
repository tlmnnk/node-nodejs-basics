import { resolve } from 'path';
import { rename as fsRename, access, constants  } from 'fs/promises'; 
import * as url from 'url';

const __dir = url.fileURLToPath(new URL('.', import.meta.url));
const ERR_MESSAGE = 'FS operation failed';
const FILES = './files/';

const WRONG_FILE_NAME = 'wrongFilename.txt';
const CORRECT_FILE_NAME = 'properFilename.md';

const WRONG_FILE_PATH = resolve(__dir, FILES, WRONG_FILE_NAME);
const CORRECT_FILE_PATH = resolve(__dir, FILES, CORRECT_FILE_NAME);

const isFileExist = async (filepath) => {
    try {
        await access(filepath, constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
};


const rename = async () => {
    if (!(await isFileExist(WRONG_FILE_PATH))) throw new Error(ERR_MESSAGE);
    if (await isFileExist(CORRECT_FILE_PATH)) throw new Error(ERR_MESSAGE);
    await fsRename(WRONG_FILE_PATH, CORRECT_FILE_PATH);
};

await rename();
