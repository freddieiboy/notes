import React, { Component } from "react";
import { Rect } from "react-konva";
import { Consumer } from './Context.js';
import Konva from "konva";


export default class SingleNote extends Component {
    render() {
      return (
        <Consumer>
          {({addNote, centerX, centerY, noteSize}) => (
            <Rect
              x={centerX}
              y={centerY}
              offsetX={noteSize / 2}
              offsetY={noteSize / 2}
              width={noteSize}
              height={noteSize}
              fill={Konva.Util.getRandomColor()}
              shadowBlur={4}
              draggable
              onClick={addNote}
            />
          )}
        </Consumer>
      );
    }
  }
  