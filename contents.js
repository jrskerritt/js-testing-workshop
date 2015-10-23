let React = require('react');
let {Link} = require('react-router');
let DocLinks = require('./docLinks');

const displayName = 'Contents';
const testServer = 'http://localhost:8292/webpack-dev-server';

class Contents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <div className="chapters">
                <div className="title">Testing JavaScript and React</div>
                <div className="subtitle"><i>with Mocha</i></div>
                <div className="images">
                    <img src="images/js-logo.png" alt="javascript" />
                    <img src="images/react-logo.svg" alt="react" />
                    <img src="images/coffee.jpg" alt="coffee" />
                </div>
                <ol>
                    <li>
                        <a href={`${testServer}/01-basics/test.html`} target="_blank">
                            Mocha basics
                        </a>
                    </li>
                    <li>
                        <a href={`${testServer}/02-spies-and-stubs/test.html`} target="_blank">
                            Spies and stubs
                        </a>
                    </li>
                    <li><Link to="03">Testing React components</Link></li>
                    <li><Link to="04">Module/dependency injection</Link></li>
                    <li><Link to="05">General testing best practices</Link></li>
                    <li><Link to="06">How this demo works: Webpack</Link></li>
                </ol>
                <DocLinks />
            </div>
        </div>;
    }
}

Contents.displayName = displayName;

module.exports = Contents;
