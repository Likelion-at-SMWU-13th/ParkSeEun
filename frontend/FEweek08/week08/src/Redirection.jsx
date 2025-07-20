import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

// 2. Authorization Code를 사용해 Access Token 발급 받기.
const Redirection = () => {
  // Redirect URI에서 Authorization Code를 추출.
  const [params] = useSearchParams();
  const authCode = params.get("code");

  // "authorization-code" 방식으로 토큰을 요청하겠다는 의미.
  const grant_type = "authorization_code";
  const navigate = useNavigate();

  useEffect(() => {
    // REST API KEY, Redirect URI, Authorization Code 값을 포함하여 Access Token을 요청.
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${
        import.meta.env.VITE_REST_API_KEY
      }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
      // 발급받은 Access Token을 localStorage에 저장한 뒤, greeting 페이지로 이동.
    ).then((res) => {
      const data = res.json();
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token); // 토큰 저장
        navigate("/greeting"); // 페이지 이동
      });
    });
  }, [authCode, grant_type, navigate]);

  return <div>Redirection Page: 카카오 로그인 중...</div>;
};

export default Redirection;
