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
    exports.Hello = Hello;
});
//# sourceMappingURL=hello.js.map