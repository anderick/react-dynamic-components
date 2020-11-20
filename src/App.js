import React, { useState } from "react";
import DynamicWidget from "./components/DynamicWidget";
import "./styles.css";

export default function App() {
  const [widgets, setWidgets] = useState([]);
  const [newWidget, setNewWidget] = useState("");

  return (
    <div className="App">
      <h2>Dynamic Components</h2>
      <h4>
        Try to add <i>cat</i> or <i>dog</i> and hit Enter.
      </h4>
      <hr />
      <input value={newWidget} onChange={(e) => setNewWidget(e.target.value)} />
      <button
        disabled={!newWidget}
        onClick={() => {
          setWidgets([...widgets, newWidget]);
          setNewWidget("");
        }}
      >
        Add
      </button>
      <ul>
        {widgets.map((w, i) => (
          <li>
            <DynamicWidget key={i} component={w} />
          </li>
        ))}
      </ul>
    </div>
  );
}
