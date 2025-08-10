import React, { useState } from "react";
import GPT from "./GPT";

const GPTContainer = () => {
  const [question, setQuestion] = useState("");
  const [ask, setAsk] = useState("");

  const GPTquest = () => {
    setAsk(question);
  };

  return (
    <div>
      <input
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="질문을 입력하세요"
        type="text"
      />
      <button onClick={GPTquest}>질문하기</button>
      {ask && <GPT quest={ask} />}
    </div>
  );
};

export default GPTContainer;
