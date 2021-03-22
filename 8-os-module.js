const os = require('os') // looking for built-in module: operative system

// info about current user
const user = os.userInfo();

// methor returns the system uptime in seconds
const uptime = os.uptime();

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}