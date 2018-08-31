const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
	const createFile = fs.writeFile('something.txt', 'Hello World', 'utf8', (err) => {
  	if (err) throw err;
  	console.log('The file has been created!');
	});
};

module.exports.mkdir = () => {
  const makeDirectory = fs.mkdir('./', function (err) {
    if (err) throw err;
  	console.log('The directory has been created!');
	});        
};