const fsPromises = require('fs').promises;
const path = require('path');

const fileOS = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'read.txt'), 'utf-8');
        console.log(data);
        // await fsPromises.unlink(path.join(__dirname, 'files', 'read.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'write.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'write.txt'), '\n\nNice to meet you.');
        await fsPromises.rename(path.join(__dirname, 'files', 'write.txt'), path.join(__dirname, 'files', 're-name.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 're-name.txt'), 'utf-8');
        console.log(newData);
    } catch (err) {
        console.error(err);
    }
}

fileOS();