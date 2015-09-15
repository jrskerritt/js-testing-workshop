let React = require('react');
let {Link} = require('react-router');

const displayName = 'Part5';

class Part5 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="links">
            <p>
                <a
                    href="http://localhost:8192/webpack-dev-server/05-best-practices/test.html"
                    target="_blank"
                >
                    Go to the Mocha test runner
                </a>
            </p>
            <p>
                <Link to="/">Back to contents</Link>
            </p>
        </div>;
    }
}

Part5.displayName = displayName;

module.exports = Part5;
