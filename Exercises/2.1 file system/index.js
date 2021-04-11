const fs = require('fs');

fs.writeFileSync('newNode.txt', 'Hello Node.js');

fs.copyFileSync('newNode.txt', 'copyNode.txt');

fs.renameSync('copyNode.txt', 'newCopyNode.txt');

const fileSystem = '../2.1 file system';

fs.readdirSync(fileSystem).forEach(fileList => 
    {console.log(fileList);
});

fs.appendFileSync('newCopyNode.txt', 'My name is Zehava:)');

