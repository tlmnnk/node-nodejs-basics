import { resolve } from 'path';
import { access, constants, rm  } from 'fs/promises'; 
import * as url from 'url';

const __dir = url.fileURLToPath(new URL('.', import.meta.url));
const ERR_MESSAGE = 'FS operation failed';
const FILES = './files/';

const REMOVE_FILE_NAME = 'fileToRemove.txt';
const REMOVE_FILE_PATH = resolve(__dir, FILES, REMOVE_FILE_NAME);

const isFileExist = async (filepath) => {
    try {
        await access(filepath, constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
};


const remove = async () => {
    if (!(await isFileExist(REMOVE_FILE_PATH))) throw new Error(ERR_MESSAGE);
    await rm(REMOVE_FILE_PATH);
};

await remove();
