import "./styles.css";
import { ReactMic } from "react-mic";
import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

export default function App() {
  const [record, setRecord] = useState(false);
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
  });

  function onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
  }

  const switchRecord = () => {
    setRecord(!record);
  };

  return (
    <div className="App">
      {process.env.OPENAI_KEY}
      <ReactMic record={record} onStop={onStop} mimeType="audio/mp3" />
      <br />
      <button onClick={switchRecord} type="button">
        {record ? "Stop" : "Start"}
      </button>
    </div>
  );
}
