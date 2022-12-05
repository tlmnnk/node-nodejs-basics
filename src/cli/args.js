const parseArgs = () => {
    const ARG_PREFIX = '--';
    const res = [];
    process.argv.forEach((item, i) => {
        const isStartsWithPrefix = item.indexOf(ARG_PREFIX) === 0;

        if (isStartsWithPrefix && process.argv[i + 1]) {
           res.push(`${item.slice(2)} is ${process.argv[i + 1]}`);
        }
    });
    console.log(res.join(', '));
};

parseArgs();