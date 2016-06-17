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
    var indexTemplate = fs.readFileSync(path.join(__dirname, './templates/directive-webpack/index.mustache'), 'utf8');

    var directiveName = process.argv[3];
    if (!directiveName) {
        console.log(`Error: No directive name specified. Correct syntax is '${helper.name} directive directive-name'`);
        process.exit(1);
    }

    directiveName = helper.kebablize(directiveName);

    var dir = `./${directiveName}`;

    var className = helper.kebabToPascal(directiveName) + 'Directive';

    var context = {className, directiveName};

    function createFiles() {
        fs.writeFile(`${directiveName}/${directiveName}.directive.ts`, mustache.render(typescriptTemplate, context));
        fs.writeFile(`${directiveName}/${directiveName}.directive.spec.ts`, mustache.render(testsTemplate, context));
        fs.writeFile(`${directiveName}/index.ts`, mustache.render(indexTemplate, context));

        console.log(`Created the "${directiveName}" directive in the "${directiveName}" directory.`);
    }

// output the component files.

    helper.generate(dir, createFiles);


};