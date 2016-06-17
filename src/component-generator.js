/**
 *
 * Component generator.
 */

const fs = require('fs');
const mustache = require('mustache');
const path = require('path');
const helper = require('./helper');

module.exports = (isLazy) => {
    var htmlTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/html.mustache'), 'utf8');
    var typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/typescript.mustache'), 'utf8');
    var sassTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/sass.mustache'), 'utf8');
    var testsTemplate = fs.readFileSync(path.join(__dirname, './templates/component-webpack/tests.mustache'), 'utf8');

    var componentName = process.argv[3];
    if (!componentName) {
        console.log(`Error: No component name specified. Correct syntax is '${helper.name} ${isLazy? 'lazy-component':'component'} component-name'`);
        process.exit(1);
    }

    componentName = helper.kebablize(componentName);

    var dir = `./${componentName}`;
    if (isLazy) {
        dir = `./+${componentName}`;
    }

    var dirName = dir.replace('./', '');

    var className = helper.kebabToPascal(componentName) + 'Component';
    var context = {componentName, className};

    function createFiles() {
        fs.writeFile(`${dirName}/${componentName}.component.ts`, mustache.render(typescriptTemplate, context));
        fs.writeFile(`${dirName}/${componentName}.component.html`, mustache.render(htmlTemplate, context));
        fs.writeFile(`${dirName}/${componentName}.scss`, mustache.render(sassTemplate, context));
        fs.writeFile(`${dirName}/${componentName}.component.spec.ts`, mustache.render(testsTemplate, context));
        console.log(`Created the ${componentName} ${isLazy ? 'lazy ' : ''}component in the ${dirName} directory.`);
    }

    // output the component files.

    helper.generate(dir, createFiles);




}