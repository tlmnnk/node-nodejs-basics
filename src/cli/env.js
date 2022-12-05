const parseEnv = () => {
    const RSS_VAR_START = 'RSS_';
    const res = [];
    Object.entries(process.env).forEach(([key, value]) => {
        if (key.includes(RSS_VAR_START)) {
            res.push(`${key}=${value}`);
        }
    });
    console.log(res.join('; '));
};

parseEnv();