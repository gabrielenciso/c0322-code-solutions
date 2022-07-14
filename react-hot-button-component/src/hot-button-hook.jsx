import React, { useState } from 'react';

function HotButton() {

  const [count, setCount] = useState(0);

  function setColor() {
    if (count < 3) return 'blue';
    if (count < 6) return 'violet';
    if (count < 9) return 'red';
    if (count < 12) return 'orange';
    if (count < 15) return 'yellow';
    if (count < 18) return 'white';
  }

  return (
    <button className={setColor} onClick={() => setCount(count + 1)}>Hot Button</button>
  );
}

export default HotButton;
