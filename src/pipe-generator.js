/**
 * Created by Rex on 12/06/2016.
 */

/**
 * Pipe generate.
 */
const fs = require('fs');
const mustache = require('mustache');
const path = require('path');
const helper = require('./helper');

module.exports = () => {
    var typescriptTemplate = fs.readFileSync(path.join(__dirname, './templates/pipe-webpack/typescript.mustache'), 'utf8');
    var testsTemplate = fs.readFileSync(path.join(__dirname, './templates/pipe-webpack/tests.mustache'), 'utf8');

    var pipeNameKebab = process.argv[3];
    if (!pipeNameKebab) {
        console.log(`Error: No pipe name specified. Correct syntax is '${helper.name} pipe pipe-name'`);
        process.exit(1);
    }

    pipeNameKebab = helper.kebablize(pipeNameKebab);

    var dir = `./${pipeNameKebab}`;

    var className = helper.kebabToPascal(pipeNameKebab) + 'Pipe';

    var pipeName =  helper.kebabToPascal(pipeNameKebab);
    pipeName = pipeName.charAt(0).toLowerCase() + pipeName.slice(1);

    var context = {pipeNameKebab, className, pipeName};

// output the component files.
    function createFiles() {
        fs.writeFile(`${pipeNameKebab}/${pipeNameKebab}.pipe.ts`, mustache.render(typescriptTemplate, context));
        fs.writeFile(`${pipeNameKebab}/${pipeNameKebab}.pipe.spec.ts`, mustache.render(testsTemplate, context));
        console.log(`Created the "${pipeNameKebab}" pipe in the "${pipeNameKebab}" directory.`);
    }

    helper.generate(dir, createFiles);
}
