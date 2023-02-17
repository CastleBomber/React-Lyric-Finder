import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      { track: { tack_name: "abc" } },
      { track: { tack_name: "123" } },
    ],
    heading: "Top 10 Tracks",
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
