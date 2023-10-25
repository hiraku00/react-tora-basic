import React, { useState } from "react";

const BadCounter = () => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
    // 1秒後に値が更新されるので、ボタン連打すると正しく反映されなくなる
    // setTimeout(() => setCount(count + 1), 1000);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>
        よくないカウンター
        <br />
        現在のカウント数: {count}
      </p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
};

export default BadCounter;
