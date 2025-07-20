import React, { useEffect, useState } from "react";

// 3. 리소스 서버의 자원 요청하기.
const Greeting = () => {
  const [name, setName] = useState();
  const [profileImg, setProfileImg] = useState();

  useEffect(() => {
    // localStorage에 저장한 Access Token을 가져옴.
    const accessToken = localStorage.getItem("accessToken");

    // Access Token으로 카카오 서버에 사용자 정보 요청.
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-type": "application/x-www-form-urlencoded",
      },
      // 사용자 닉네임과 프로필 이미지를 상태에 저장.
    }).then((res) => {
      const userData = res.json();
      userData.then((user) => {
        setName(user.properties.nickname); // 닉네임 상태 저장.
        setProfileImg(user.properties.profile_image); // 프로필 상태 저장.
      });
    });
  }, []);

  // 응답된 값을 UI에 반영.
  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }}
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
