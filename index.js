#!/usr/bin/env node

'use strict';
const generateComponent = require('./src/component-generator');
const generateDirective = require('./src/directive-generator');
const generateService = require('./src/service-generator');
const generatePipe = require('./src/pipe-generator');
const helper = require('./src/helper');
const help = require('./src/help');

// load the mustache templates.

// ensure a component name argument has been specified.
const modes = ['component', 'directive', 'service', 'pipe', 'help', 'lazy-component'];
var mode = process.argv[2];
if (!mode || modes.indexOf(mode) === -1) {
	console.log(`Error: Correct syntax is '${helper.name} component|lazy-component|directive|service|pipe component-selector|directive-name|service-name|pipe-name', for more details, use "${helper.name} help"`);
} else {
	mode = mode.toLowerCase();
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
		case modes[4]:
			help();
			break;
		case modes[5]:
			generateComponent(true);
		default:
			break;
	}
}