import React, { useState } from "react";
import GPT from "./GPT";
import * as S from "./styled";

const GPTContainer = () => {
  const [question, setQuestion] = useState("");
  const [ask, setAsk] = useState("");

  const GPTquest = () => {
    setAsk(question);
  };

  return (
    <S.GPTbox>
      <S.Title>GPT에게 질문하기🔍</S.Title>
      <S.Qusetbox>
        <S.Qusetion
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="질문을 입력하세요"
          type="text"
        />
        <S.Qusetbtn onClick={GPTquest}>질문하기</S.Qusetbtn>
      </S.Qusetbox>
      {ask && <GPT quest={ask} />}
    </S.GPTbox>
  );
};

export default GPTContainer;
