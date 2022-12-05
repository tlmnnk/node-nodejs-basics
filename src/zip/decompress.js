import zlib from 'zlib';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const FILES_DIR = fileURLToPath(new URL('./files/', import.meta.url));
const INPUT_NAME = 'fileToCompress.txt';
const INPUT_PATH = resolve(FILES_DIR, INPUT_NAME);

const OUTPUT_NAME = 'archive.gz';
const OUTPUT_PATH = resolve(FILES_DIR, OUTPUT_NAME);

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const input = createReadStream(OUTPUT_PATH);   
    const output = createWriteStream(INPUT_PATH);   
    input.pipe(unzip).pipe(output);
};

await decompress();
