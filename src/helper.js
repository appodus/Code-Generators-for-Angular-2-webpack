const fs = require('fs');

module.exports = {
    /**
     * Converts kebab-case to PascalCase.
     */
    kebabToPascal: kebabToPascal,
    pascalToKebab: pascalToKebab,
    generate: generate,
    kebablize: kebablize,
    name: 'ng2-wp'
};

function kebabToPascal(string) {
    return capitalizeFirstLetter(string.replace(/-([a-z])/g, match => match[1].toUpperCase())
    )
        ;
    /**
     * Does what it says on the tin.
     */
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
};

function pascalToKebab(string) {
    return string.split(/(?=[A-Z])/).join(' ').toLowerCase().split(' ').join('-');
}

function generate(dir, createFile) {
    try {
        generator();
    } catch (e) {
        console.log('An error occurred!', e);
    }
    function generator() {
        fs.exists((dir), (exists)=> {
            if (!exists) {
                fs.mkdir(dir);
                createFile();
            } else {
                console.log(`Error: folder ${dir.replace('./', '')} already exists`);
                process.exit(1);
            }
        });
    }
}

function kebablize(name) {
    // convert pascal and camel case to kebab and if the component name provided is kebab and not pascal and camel case, then lower case them all.
    if (!name.match(/^[A-Z]+$/) && name.indexOf('-') === -1 && name.match(/(?=[A-Z])/)) {
        name = pascalToKebab(name);
    } else {
        name = name.toLowerCase();
    }

    return name;
}
