import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

// 1. Authorization Code 발급 받기

// - response_type : Authorization Code 방식 로그인임을 알려주는 역할.
// - client_id : 카카오에 등록된 앱을 식별하는 값.
// - redirect_url : 로그인과 동의를 마친 후, 인가 코드가 리디렉션될 주소.
const Login = () => {
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

  // 버튼 클릭 시, 카카오 로그인 인가 요청 URL로 이동.
  const handleKakao = () => {
    window.location.href = authServerLink;
  };

  return (
    <div className="login-box">
      <h2>로그인</h2>
      <div className="btns-container">
        <button onClick={handleKakao}>
          {" "}
          <img src={KakaoImg} alt="kakao_button" />
        </button>
        <button onClick={handleKakao}>
          {" "}
          <img src={GoogleImg} alt="google_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
