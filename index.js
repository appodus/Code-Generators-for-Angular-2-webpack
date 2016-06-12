#!/usr/bin/env node

'use strict';
const fs = require('fs');
const path = require('path');
const mustache = require('mustache');

const createComponent = require('./src/create-component');

// load the mustache templates.

// ensure a component name argument has been specified.
const modes = ['component', 'directive', 'service', 'pipe'];
const mode = process.argv[2];
if (!mode || modes.indexOf(mode) === -1) {
	console.log('Error: Correct syntax is `ng2g component|directive|service|pipe component-selector|directive-selector|ServiceClass|pipe-selector');
}
if (mode === modes[0]) {
	createComponent();
}

if(mode === modes[1]){
	createDirective();
}

if(mode === modes[1]){
	
	
	createService();
}
if(mode === modes[1]){
	
	
	createPipe();
}
function createPipe() {
	
}
function createService() {
	
}
function createDirective() {
	
}




