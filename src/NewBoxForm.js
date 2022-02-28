import React, { Component } from "react";
import Box from "./Box";
import { v4 as uuidv4 } from 'uuid';
export default class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", colorbg: "", boxes: [] };
    this.remove=this.remove.bind(this);
  }

  addItems = () => {
    this.setState({
      boxes: [
        ...this.state.boxes,
        {
          id:uuidv4(),
          height: this.state.height,
          width: this.state.width,
          colorbg: this.state.colorbg,
        },
      ],
    });
  };
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      height: "",
      width: "",
      colorbg: "",
    });
  };
  renderItems = () => {
    return (
      <div>
        {this.state.boxes.map((b) => (
          <Box box={this} remove={this.remove} width={b.width} height={b.height} colorbg={b.colorbg} id={b.id} key={b.id} />
        ))}
      </div>
    );
  };
  remove(x){
      this.setState({
        boxes:this.state.boxes.filter(t=>t.id!==x.props.id)
      })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="height">Height</label>
          <input
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor="width">Width</label>
          <input
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor="colorbg">Color</label>
          <input
            name="colorbg"
            value={this.state.colorbg}
            onChange={this.handleChange}
          />
          <button onClick={this.addItems}>Add</button>
        </form>
        {this.renderItems()}
      </div>
    );
  }
}
