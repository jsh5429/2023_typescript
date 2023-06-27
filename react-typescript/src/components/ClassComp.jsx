import React, {Component} from 'react'

export default class ClassComp extends Component {
  constructor(props){
    super(props);
    this.state = {
        first : "hi"
    }
  }
  render() {
    return (
        <div>{this.props}</div>
    )
  }
}
