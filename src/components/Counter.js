import { useState } from "react";
import React from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(`counter: ${counter}`);

  const handleIncrement = function () {
    setCounter(counter + 1);
  };

  return (
    // Phải cho các thành phần vào thẻ cha, thẻ bao đóng, vì ở trong core nó sẽ chạy đệ quy, phải có thằng cha rồi query đến các thằng con.
    <React.Fragment>
      <h1>Counter {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
    </React.Fragment>
    // Cách viết tắt của React.Fragment
    //   <>
    //    <h1>Counter {counter}</h1>
    //    <button>Increment</button>
    //    <button>Decrement</button>
    //   </>
  );
}

export default Counter;
