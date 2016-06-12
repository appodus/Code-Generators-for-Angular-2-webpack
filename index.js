#!/usr/bin/env node

'use strict';
const generateComponent = require('./src/component-generator');
const generateDirective = require('./src/directive-generator');
const generateService = require('./src/service-generator');
const generatePipe = require('./src/pipe-generator');

// load the mustache templates.

// ensure a component name argument has been specified.
const modes = ['component', 'directive', 'service', 'pipe'];
const mode = process.argv[2];
if (!mode || modes.indexOf(mode) === -1) {
	console.log('Error: Correct syntax is `ng2g component|directive|service|pipe component-selector|directive-selector|ServiceClass|pipe-selector');
} else {
	switch (mode){
		case modes[0]:
			generateComponent();
			break;
		case modes[1]:
			generateDirective();
			break;
		case modes[2]:
			generateService();
			break;
		case modes[3]:
			generatePipe();
			break;
		default:
			break;
	}
}