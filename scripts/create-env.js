const fs = require('fs'); // file system

fs.writeFileSync('./.env', `API=${process.env.API}\n`)