import { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <header>
          <h1>Kalvium Note Keeping App</h1>
        </header>

        <div>
          <div onSubmit={this.handleSubmit}>
            <h3>Input</h3>
            <textarea onChange={this.hanldeChange} />
          </div>

          <div>
            <h3>Pro Note</h3>
            <div>
              <div>{this.state.value}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
