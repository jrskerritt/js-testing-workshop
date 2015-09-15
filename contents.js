let React = require('react');
let {Link} = require('react-router');

const displayName = 'Contents';
const testServer = 'http://localhost:8192/webpack-dev-server';

class Contents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="container">
            <div className="chapters">
                <div className="title">Testing JavaScript and React</div>
                <div className="subtitle"><i>with Mocha</i></div>
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
            </div>
        </div>;
    }
}

Contents.displayName = displayName;

module.exports = Contents;
