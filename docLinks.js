let React = require('react');

const displayName = 'DocLinks';

class DocLinks extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="docLinks">
            <h2>Links to Docs</h2>
            <ul>
                <li><a href="https://mochajs.org/">Mocha docs</a></li>
                <li><a href="http://chaijs.com/api/">Chai docs</a></li>
                <li><a href="//http://sinonjs.org/docs/">Sinon docs</a></li>
            </ul>
        </div>;
    }
}

DocLinks.displayName = displayName;

module.exports = DocLinks;
