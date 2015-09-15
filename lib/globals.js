
if (require.extensions) {
    // The tests are running from the command line, so add
    // extensions for css/less since we can't use null-loader
    const overrideStylesheet = (module, filename) => {
        module.exports = null;
    };

    require.extensions['.css'] = overrideStylesheet;
    require.extensions['.less'] = overrideStylesheet;
}

let chai = require('chai');
global.chai = chai;
global.expect = chai.expect;
global.assert = chai.assert;

global.sinon = require('sinon');

global.React = require('react/addons');
global.TestUtils = React.addons.TestUtils;

// Shorter function aliases for React TestUtils functions
global.TestUtils.scryWithClass = TestUtils.scryRenderedDOMComponentsWithClass;
global.TestUtils.findWithClass = TestUtils.findRenderedDOMComponentWithClass;
global.TestUtils.scryWithTag = TestUtils.scryRenderedDOMComponentsWithTag;
global.TestUtils.findWithTag = TestUtils.findRenderedDOMComponentWithTag;
global.TestUtils.scryWithType = TestUtils.scryRenderedComponentsWithType;
global.TestUtils.findWithType = TestUtils.findRenderedComponentWithType;
