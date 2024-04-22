import { useState } from "react";
import { memo } from "react";

function App() {
  return (
    <div>
      <HeaderWithButton />
      <Headers title="kirat1" />
      <Headers title="kirat1" />
      <Headers title="kirat1" />
      <Headers title="kirat1" />
      <Headers title="kirat1" />
    </div>
  );
}

function HeaderWithButton() {
  const [title, setTitle] = useState("my name is harkirat");

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Headers title={title}> </Headers>
      <Headers title={title}> </Headers>
    </div>
  );
}

const Headers= memo (function ({ title }) {
  return <div>{title}</div>;
});

export default App;
