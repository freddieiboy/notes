import React, { Component } from "react";
import { Stage, Layer } from "react-konva";
import { Provider } from './Context.js';
import SingleNote from "./SingleNote";

export default class NoteCanvas extends Component {
  state = {
    notesList: [0]
  };
  componentDidMount = () => {
    this.setState({
      centerX: window.innerWidth / 2,
      centerY: window.innerHeight / 2,
      noteSize: 200
    })
  }
  addNote = () => {
    const currentList = this.state.notesList;
    let newList = [...currentList, 0];
    this.setState({ notesList: newList });
  };
  render() {
    const { notesList, centerX, centerY, noteSize } = this.state;
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Provider
            value={{
              notesList,
              noteSize,
              centerX,
              centerY,
              addNote: (...args) => this.addNote(...args)
            }}>
            <Layer>
              {this.state.notesList.map((el, key) => {
                return <SingleNote key={key} />;
              })}
            </Layer>
          </Provider>
        </Stage>
    );
  }
}