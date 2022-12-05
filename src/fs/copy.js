import { resolve } from 'path';
import { cp, mkdir, access, constants  } from 'fs/promises'; 
import * as url from 'url';

const __dir = url.fileURLToPath(new URL('.', import.meta.url));
const ERR_MESSAGE = 'FS operation failed';

const FILES = './files/';
const DEST = './files_copy/';

const SOURCE_PATH = resolve(__dir, FILES);
const DEST_PATH = resolve(__dir, DEST);

const isFileExist = async (filepath) => {
    try {
        await access(filepath, constants.F_OK);
        return true;
    } catch (e) {
        return false;
    }
};

const createFolder = async () => {
    try {
        const projectFolder = new URL(DEST, import.meta.url);
        await mkdir(projectFolder, { recursive: true });
      } catch (err) {
        console.error(err.message);
      }
};

const copy = async () => {
    if (!(await isFileExist(SOURCE_PATH))) throw new Error(ERR_MESSAGE);
    if (await isFileExist(DEST_PATH)) throw new Error(ERR_MESSAGE);
    await createFolder();
    await cp(SOURCE_PATH, DEST_PATH, { recursive: true });
};

await copy();
