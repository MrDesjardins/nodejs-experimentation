define(["require", "exports", 'react', "javascripts/hello"], function (require, exports, React, hello_1) {
    "use strict";
    class HelloEditor extends React.Component {
        constructor(props) {
            super(props);
        }
        onChange(event) {
            this.props.onNameChange(event.target.value);
        }
        render() {
            return React.createElement("ul", null, React.createElement("li", null, "Hello Editor for ", this.props.name), React.createElement("li", null, React.createElement("label", null, "Name:"), React.createElement("input", {type: "input", value: this.props.name, onChange: e => this.onChange(e)})), React.createElement("li", null, React.createElement(hello_1.Hello, {name: this.props.name})));
        }
    }
    exports.HelloEditor = HelloEditor;
});
//# sourceMappingURL=helloeditor.js.map