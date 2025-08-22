import { DummyComponent, title } from "@demo/util";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div></div>
      <h1>{title}</h1>
      <DummyComponent />
      <div className="card">
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ fontSize: 16, padding: 10 }}
        >
          count!!: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
