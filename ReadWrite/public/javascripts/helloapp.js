define(["require", "exports", 'react', "javascripts/helloeditor"], function (require, exports, React, helloeditor_1) {
    "use strict";
    class HelloApp extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return React.createElement("div", null, React.createElement("h1", null, "Hello App"), React.createElement(helloeditor_1.HelloEditor, {name: this.props.name, onNameChange: e => this.props.onNameChange(e)}));
        }
    }
    exports.HelloApp = HelloApp;
});
//# sourceMappingURL=helloapp.js.map