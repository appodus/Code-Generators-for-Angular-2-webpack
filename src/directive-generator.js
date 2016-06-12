/**
 * Directive generator.
 */
const fs = require('fs');
const mustache = require('mustache');
const path = require('path');
const helper = require('./helper');

module.exports = () => {
	var typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/directive-webpack/typescript.mustache'), 'utf8');
	var testsTemplate = fs.readFileSync(path.join(__dirname, './templates/directive-webpack/tests.mustache'), 'utf8');

	var directiveName = process.argv[3];
	if (!directiveName) {
		console.log('Error: No directive name specified. Correct syntax is `ng2g directive directiveName|DirectiveName`');
		process.exit(1);
	}

	if (directiveName.indexOf('-') !== -1) {
		console.log('Error: please use camel or pascal case for directive name');
		process.exit(1);
	}

	var className = directiveName.charAt(0).toUpperCase() + directiveName.slice(1) + 'Directive';
	var dirName = helper.pascalToKebab(directiveName);

	var context = {className, dirName, directiveName};

// output the component files.
	try {
		var dir = `./${dirName}`;
		if (!fs.exists(dir)) {
			fs.mkdir(dir);
		}
		fs.writeFile(`${dirName}/${dirName}.directive.ts`, mustache.render(typescriptTemplate, context));
		fs.writeFile(`${dirName}/${dirName}.directive.spec.ts`, mustache.render(testsTemplate, context));
	} catch (e) {
		console.log('An error occurred!', e);
	}

	console.log(`Created the "${directiveName}" directive in the "${dirName}" directory.`);
};