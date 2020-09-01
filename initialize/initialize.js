/**
 *
 * @type {module:os}
 */
const os = require('os');
const fs = require('fs');

exports.info = function(){
    const banner = fs.readFileSync(__dirname +'/banner.txt','utf8');
    console.log(banner);
    console.log('================================================================================================')
    console.log(`node version: ${process.version}`);
    console.log(`node home: ?`);
    console.log(`node env: ${process.env.NODE_ENV}`);
    console.log(`host platform: ${process.platform}`);
    console.log(`host architecture: ${process.arch}`);
    console.log(`hostname: ${os.hostname()}`);
    console.log(`user home: ${os.userInfo().username}`);
    console.log(`user home directory: ${os.userInfo().homedir}`);
    console.log(`config mode: dev`);
    console.log('================================================================================================');
    console.log(`mkdir file`);
    mkdirDirectory();
    console.log('================================================================================================');
};

/**
 *
 */
function mkdirDirectory(){
    let logDir = os.userInfo().homedir + '/.docker-rest-api/logs';

    console.log(`logDir directory: ${logDir}`);

    fs.mkdirSync(logDir, {recursive: true}, err =>{
        console.log(err);
        process.exit(1);
    });
};

