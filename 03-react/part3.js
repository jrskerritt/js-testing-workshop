let React = require('react');
let {Link} = require('react-router');
let PlayerApp = require('./playerApp');

const displayName = 'Part3';

class Part3 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <PlayerApp />
            <div className="links">
                <p>
                    <a
                        href="http://localhost:8192/webpack-dev-server/03-react/test.html"
                        target="_blank"
                    >
                        Go to the Mocha test runner
                    </a>
                </p>
                <p>
                    <Link to="/">Back to contents</Link>
                </p>
            </div>
        </div>;
    }
}

Part3.displayName = displayName;

module.exports = Part3;
