const { JSDOM } = require('jsdom');

const dom = new JSDOM('<!DOCTYPE html>')
global.window = dom.window;
global.document = dom.window.document;
global.navigator = window.navigator;