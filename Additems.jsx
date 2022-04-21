import { Component } from "react";
class Additems extends Component {
  state = {
    task: "",
    time: ""
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter task"
          id="task"
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="enter date"
          id="date"
          onChange={this.handleChange}
        />
        <input type="submit" value="add" />
      </form>
    );
  }
}
export default Additems;
