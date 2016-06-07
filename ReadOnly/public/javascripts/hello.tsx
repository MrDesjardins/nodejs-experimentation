/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />

import * as React from 'react';

interface HelloProps { name: string;}
interface HelloState { }

class Hello extends React.Component<HelloProps,HelloState> {
  constructor(props: HelloProps) {
    super(props);
  }
  public render() {
    return <div>Hello {this.props.name}</div>
  }
}
function HelloFactory(props: HelloProps) {
  return React.createElement(Hello, props);
}

export = HelloFactory;