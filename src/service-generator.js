/**
 * Created by Rex on 12/06/2016.
 */
/**
 * Service generate.
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
        console.log(`Error: No service name specified. Correct syntax is '${helper.name} service service-name'`);
        process.exit(1);
    }

    serviceName = helper.kebablize(serviceName);

    var dir = `./${serviceName}`;

    var className = helper.kebabToPascal(serviceName) + 'Service';

    var context = {className, serviceName};

// output the component files.
    function createFiles() {

        fs.writeFile(`${serviceName}/${serviceName}.service.ts`, mustache.render(typescriptTemplate, context));
        fs.writeFile(`${serviceName}/${serviceName}.service.spec.ts`, mustache.render(testsTemplate, context));


        console.log(`Created the "${serviceName}" service in the "${serviceName}" directory.`);
    }

    helper.generate(dir, createFiles);
};
