/**
 *
 * Component generator.
 */

const fs = require('fs');
const mustache = require('mustache');
const path = require('path');
const helper = require('./helper');

module.exports = () => {
	var htmlTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/html.mustache'), 'utf8');
	var typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/typescript.mustache'), 'utf8');
	var sassTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/sass.mustache'), 'utf8');
	var testsTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/tests.mustache'), 'utf8');

	var componentName = process.argv[3];
	if (!componentName) {
		console.log('Error: No component name specified. Correct syntax is `cmpg my-component-name`');
		process.exit(1);
	}


	var className = helper.kebabToPascal(componentName) + 'Component';
	var context = {componentName, className};

// output the component files.
	try {
		var dir = `./${componentName}`;
		if (!fs.exists(dir)) {
			fs.mkdir(dir);
		}
		fs.writeFile(`${componentName}/${componentName}.component.ts`, mustache.render(typescriptTemplate, context));
		fs.writeFile(`${componentName}/${componentName}.component.html`, mustache.render(htmlTemplate, context));
		fs.writeFile(`${componentName}/${componentName}.scss`, mustache.render(sassTemplate, context));
		fs.writeFile(`${componentName}/${componentName}.component.spec.ts`, mustache.render(testsTemplate, context));
	} catch (e) {
		console.log('An error occurred!', e);
	}

	console.log(`Created the ${componentName} component in the ${componentName} directory.`);
}