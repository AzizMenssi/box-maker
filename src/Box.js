import React, { Component } from 'react'

export default class Box extends Component {
    constructor(props){
        super(props);
        this.handleRemove=this.handleRemove.bind(this);
    }
    handleRemove(){
        this.props.remove(this)
    }
  render() {
    return (
      <div style={{backgroundColor:this.props.colorbg,width:this.props.width,height:this.props.height}} onClick={this.handleRemove}></div>
    )
  }
}
