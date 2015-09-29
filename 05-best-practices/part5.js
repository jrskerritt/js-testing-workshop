let React = require('react');
let {Link} = require('react-router');
let PlayerApp = require('./playerApp');

const displayName = 'Part5';

class Part5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <PlayerApp />
            <div className="links">
                <p>
                    <a
                        href="http://localhost:8292/webpack-dev-server/05-best-practices/test.html"
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

Part5.displayName = displayName;

module.exports = Part5;
