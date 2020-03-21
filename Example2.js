import React, { useState, useEffect } from 'react';

function Example() {
  const [count1, setCountOne] = useState(0);
  // Add 2 new states to monitor second button nr. of clicks
  // and trigger color change
  const [count2, setCountTwo] = useState(0); 
  const [className, setClass] = useState('');
  const limit = 3;  // some arbitrary limit
  
  useEffect(() => {
    count2 >= limit ? setClass('red-color') : setClass('');
  });

  return (
    <div>
      <p>You clicked {count1} times on "Click me 1" button</p>
      <p>You clicked {count2} times on "Click me 2" button</p>
      <button onClick={() => setCountOne(count1 + 1)}>
        Click me 1
      </button>
      <button 
        className={className}
        onClick={() => setCountTwo(count2 + 1)}>
        Click me 2
      </button>
    </div>
  );
}
