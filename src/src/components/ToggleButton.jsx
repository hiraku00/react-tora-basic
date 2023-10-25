import React, { useEffect, useState } from "react";

const ToggleButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };

  // [memo]
  // クリーンアップ関数(return)は、再レンダリング前に実行される
  // -> 初回は、「Current state is false」のみ
  // -> 2回目(CLOSE押下時)は、以下が表示
  //      Unsubscribe database!
  //      Current state is true
  //      Subscribe database...
  // -> 3回目(OPEN押下時)は、以下が表示
  //      Unsubscribe database!
  //      Current state is false
  useEffect(() => {
    console.log("Current state is", open);
    if (open) {
      console.log("Subscribe database...");
    }
    return () => {
      console.log("Unsubscribe database!");
    };
  });

  return <button onClick={toggle}>{open ? "OPEN" : "CLOSE"}</button>;
};

export default ToggleButton;
