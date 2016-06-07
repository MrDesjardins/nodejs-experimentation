/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />

import * as React from 'react';
import {HelloEditor} from "javascripts/helloeditor";

interface HelloAppProps { 
    name: string,
    onNameChange:(newValue:string)=>void
}
interface HelloAppState { }

export class HelloApp extends React.Component<HelloAppProps,HelloAppState> {
  constructor(props: HelloAppProps) {
    super(props);

  }
  

  public render() {
    return <div>
    <h1>Hello App</h1>
    <HelloEditor name={this.props.name} onNameChange={ e=> this.props.onNameChange(e)}/>
    </div>
  }
}

