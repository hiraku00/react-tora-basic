import { useEffect, useState } from "react";
import "./App.css";
import {
  Article,
  TextInput,
  Counter,
  BadCounter,
  ToggleButton,
} from "./components";

function App() {
  // const title1 = "React入門1";
  // const content1 = "props";
  const [name, setName] = useState("");
  const [id, setId] = useState("hiraku00");
  const ids = ["hiraku00", "apple", "aws", "google", "facebook", "microsoft"];
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)];
    setId(_id);
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <div>
        {/* <Article title={title1} content={content1} /> */}
        {/* <TextInput /> */}
        {/* <Counter /> */}
        {/* <BadCounter /> */}
        {/* <ToggleButton /> */}
        <p>{id}の、Github上の名前は{name}です。</p>
        <button onClick={getRandomId} >IDを変更</button>
      </div>
    </>
  );
}

export default App;
