/// <reference path="../../typings/react/react.d.ts" />
/// <reference path="../../typings/react/react-dom.d.ts" />

import * as React from 'react';
import {Hello} from "javascripts/hello";

interface HelloEditorProps { 
    name: string,
    onNameChange:(newValue:string)=>void
}
interface HelloEditorState { }

export class HelloEditor extends React.Component<HelloEditorProps,HelloEditorState> {
  constructor(props: HelloEditorProps) {
    super(props);
  }
  
  private onChange(event:any):void
  {
      this.props.onNameChange(event.target.value);
  }
  
  public render() {
    return <ul>
    <li>Hello Editor for {this.props.name}</li>
    <li>
        <label>Name:</label>
        <input  type="input" 
                value={this.props.name}
                onChange={e => this.onChange(e)}
                /></li>
    <li><Hello name={this.props.name}/></li>
    </ul>
  }
}

