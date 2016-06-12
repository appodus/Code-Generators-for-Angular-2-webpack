/**
 * Created by Rex on 12/06/2016.
 */
/**
 * Service generator.
 */
const fs = require('fs');
const mustache = require('mustache');
const path = require('path');
const helper = require('./helper');

module.exports = () => {
	var typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/service-webpack/typescript.mustache'), 'utf8');
	var testsTemplate = fs.readFileSync(path.join(__dirname, './templates/service-webpack/tests.mustache'), 'utf8');

	var serviceName = process.argv[3];
	if (!serviceName) {
		console.log('Error: No service name specified. Correct syntax is `ng2g service serviceName|ServiceName`');
		process.exit(1);
	}

	if (serviceName.indexOf('-') !== -1) {
		console.log('Error: please use camel or pascal case for service name');
		process.exit(1);
	}

	var className = serviceName.charAt(0).toUpperCase() + serviceName.slice(1) + 'Service';
	var dirName = helper.pascalToKebab(serviceName);

	var context = {className, dirName};

// output the component files.
	try {
		var dir = `./${dirName}`;
		if (!fs.exists(dir)) {
			fs.mkdir(dir);
		}
		fs.writeFile(`${dirName}/${dirName}.service.ts`, mustache.render(typescriptTemplate, context));
		fs.writeFile(`${dirName}/${dirName}.service.spec.ts`, mustache.render(testsTemplate, context));
	} catch (e) {
		console.log('An error occurred!', e);
	}

	console.log(`Created the "${serviceName}" service in the "${dirName}" directory.`);
};
