import zlib from 'zlib';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';

const FILES_DIR = fileURLToPath(new URL('./files/', import.meta.url));
const INPUT_NAME = 'fileToCompress.txt';
const INPUT_PATH = resolve(FILES_DIR, INPUT_NAME);

const OUTPUT_NAME = 'archive.gz';
const OUTPUT_PATH = resolve(FILES_DIR, OUTPUT_NAME);

const compress = async () => {
    const gzip = zlib.createGzip();   
    const input = createReadStream(INPUT_PATH);   
    const output = createWriteStream(OUTPUT_PATH);   
    input.pipe(gzip).pipe(output);  
};

await compress();
