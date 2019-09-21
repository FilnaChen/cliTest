#!/usr/bin/env node
const path = require('path');
const fs = require('fs-extra');
const process = require('process');
const childProcess = require('child_process');
const inquirer = require('inquirer');

const projectPath = process.cwd();
if (fs.existsSync(`${projectPath}/simple-project`)) {
	const promptList = [
		{
		    type: 'confirm',
		    name: 'continue',
		    message: 'folder simple-project is already exsit, do you want to change it?'
		}
	];
	inquirer.prompt(promptList).then(answers => {
	    if (answers.continue) {
	    	fs.rmdirSync(`${projectPath}/simple-project`);
	    	fs.mkdirSync(`${projectPath}/simple-project`);
	    } else {
	    	process.exit(0);
	    }
	})
}
fs.copySync(path.resolve(__dirname, `../`, `package`), `${projectPath}/simple-project`);
childProcess.execSync(`cd ${projectPath}/simple-project && cnpm install`);