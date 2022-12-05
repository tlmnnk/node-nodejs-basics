import { access, constants, appendFile } from 'fs/promises';
import { resolve } from 'path';
import * as url from 'url';

const __dir = url.fileURLToPath(new URL('.', import.meta.url));
const FILE_PATH = './files/fresh.txt';
const TEXT = 'I am fresh and young';
const FULL_PATH = resolve(__dir, FILE_PATH);
const ERR_MESSAGE = 'FS operation failed';

const isFileExist = async (filepath) => {
  try {
    await access(filepath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const create = async () => {
  if (await isFileExist(FULL_PATH)) {
    throw new Error(ERR_MESSAGE);
  }

  appendFile(resolve(__dir, FILE_PATH), TEXT);
};

await create();
