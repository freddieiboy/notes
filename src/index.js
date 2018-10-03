
import React from "react";
import { render } from "react-dom";
import NoteCanvas from './NoteCanvas';

const App = () => {
    return <NoteCanvas />
}

render(<App />, document.getElementById("root"));
