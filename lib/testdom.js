// Test DOM for React rendering
var jsdom = require('jsdom-no-contextify').jsdom;
global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
    userAgent: 'node.js'
};

window.alert = window.alert || () => {};
global.alert = window.alert;