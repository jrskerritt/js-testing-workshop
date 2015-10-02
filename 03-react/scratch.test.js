/*
    * renderIntoDocument vs render
    * finding elements in the component tree
    * scry vs find
    * simulating events
    * stubbing components
*/

class Parent extends React.Component {
    render() {
        return <div className="parent"></div>;
    }
}

class Child extends React.Component {
    render() {
        return <div className="child"></div>;
    }
}

describe('Parent component', () => {
    it('should render', () => {
        // let element = React.render();
        // let element = TestUtils.renderIntoDocument();
        expect(false).to.be.true;
    });
});