/**
 * Created by Rex on 12/06/2016.
 */

/**
 * Pipe generator.
 */
const fs = require('fs');
const mustache = require('mustache');
const path = require('path');
const helper = require('./helper');

module.exports = () => {
	var typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/pipe-webpack/typescript.mustache'), 'utf8');
	var testsTemplate = fs.readFileSync(path.join(__dirname, './templates/pipe-webpack/tests.mustache'), 'utf8');
	
	var pipeName = process.argv[3];
	if (!pipeName) {
		console.log('Error: No pipe name specified. Correct syntax is `ng2g pipe pipeName|PipeName`');
		process.exit(1);
	}

	if (pipeName.indexOf('-') !== -1) {
		console.log('Error: please use camel or pascal case for pipe name');
		process.exit(1);
	}

	var className = pipeName.charAt(0).toUpperCase() + pipeName.slice(1) + 'Pipe';
	var dirName = helper.pascalToKebab(pipeName);
	pipeName = pipeName.charAt(0).toLowerCase() + pipeName.slice(1);

	var context = {pipeName, className, dirName};

// output the component files.
	try {
		var dir = `./${dirName}`;
		if (!fs.exists(dir)) {
			fs.mkdir(dir);
		}
		fs.writeFile(`${dirName}/${dirName}.pipe.ts`, mustache.render(typescriptTemplate, context));
		fs.writeFile(`${dirName}/${dirName}.pipe.spec.ts`, mustache.render(testsTemplate, context));
	} catch (e) {
		console.log('An error occurred!', e);
	}
	
	console.log(`Created the "${pipeName}" pipe in the "${dirName}" directory.`);
};
