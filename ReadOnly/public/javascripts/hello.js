define(["require", "exports", 'react'], function (require, exports, React) {
    "use strict";
    class Hello extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return React.createElement("div", null, "Hello ", this.props.name);
        }
    }
    function HelloFactory(props) {
        return React.createElement(Hello, props);
    }
    return HelloFactory;
});
//# sourceMappingURL=hello.js.map