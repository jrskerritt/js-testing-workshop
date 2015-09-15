require('./css/app.less');

let React = require('react');
let {Router, Route} = require('react-router');
let HashHistory = require('react-router/lib/HashHistory').default;
let Contents = require('./contents');
let Part3 = require('./03-react/part3');
let Part4 = require('./04-di/part4');
let Part5 = require('./05-best-practices/part5');
let Part6 = require('./06-webpack/part6');

React.render(
    <Router history={new HashHistory()}>
        <Route path="/03" name="03" component={Part3} />
        <Route path="/04" name="04" component={Part4} />
        <Route path="/05" name="05" component={Part5} />
        <Route path="/06" name="06" component={Part6} />
        <Route path="/" name="contents" component={Contents} />
    </Router>,
    document.getElementById('app')
);
