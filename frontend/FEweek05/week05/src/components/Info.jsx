import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onchangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <br />
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onchangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Info;
