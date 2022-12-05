import { resolve } from 'path';
import { access, constants, readdir  } from 'fs/promises'; 
import * as url from 'url';

const __dir = url.fileURLToPath(new URL('.', import.meta.url));
const ERR_MESSAGE = 'FS operation failed';

const FILES = './files/';
const FILES_PATH = resolve(__dir, FILES);

const isFileExist = async (filepath) => {
    try {
        await access(filepath, constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
};

const list = async () => {
    if (!(await isFileExist(FILES_PATH))) throw new Error(ERR_MESSAGE);
    const files = await readdir(FILES_PATH);
    console.log(files);
};

await list();
