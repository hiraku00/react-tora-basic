import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const countUp = () => {
    setCount((prevState) => prevState + 1);
  };

  const countDown = () => {
    setCount((prevState) => prevState - 1);
  };

  const countUp2 = () => {
    setCount2((prevState) => prevState + 1);
  };

  const countDown2 = () => {
    setCount2((prevState) => prevState - 1);
  };
  // (memo)
  // 「ストリクトモード」で実行すると、安全でない副作用を洗い出すために、
  // React は意図的にコンポーネントを二重レンダリングします。

  // // 毎回実行される
  // useEffect(() => {
  //   console.log("Current count is ...", count);
  // });
  // // 初回レンダリング後のみ実行される
  // useEffect(() => {
  //   console.log("Current count is ...", count)
  // }, []);
  // // trigger が変更される度に実行される
  // useEffect(() => {
  //   console.log("Current count is ...", count)
  // }, [trigger])
  // // trigger1 or trigger2 が変更される度に実行される
  // useEffect(() => {
  //   console.log("Current count is ...", count)
  // }, [trigger1, trigger2])

  // countのみが毎回実行される
  useEffect(() => {
    console.log("Current count is ...", count)
  }, [count]);

  return (
    <div>
      <p>カウント: {count}</p>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
      <p>カウント2: {count2}</p>
      <button onClick={countUp2}>up</button>
      <button onClick={countDown2}>down</button>
    </div>
  );
};

export default Counter;
