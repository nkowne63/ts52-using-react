import React, { useState } from 'react';

Symbol.dispose = Symbol.for('Symbol.dispose')

const rgen = (count) => ({
  [Symbol.dispose]() {
    console.log('disposed', count)
  }
})

function App() {
  const [count, setCount] = useState(0)
  using r = rgen(count);
  return (
    <div className="App">
      <header className="App-header">
        sample app
      </header>
      <button onClick={() => setCount(count => count+1)}>count: {count}</button>
    </div>
  );
}

export default App;
