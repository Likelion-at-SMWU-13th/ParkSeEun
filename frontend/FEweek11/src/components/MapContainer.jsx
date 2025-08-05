import React from "react";
import KakaoMap from "./KakaoMap";
import * as S from "./styled";
import { useState } from "react";

const MapContainer = ({ title }) => {
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [isMarker, setIsMarker] = useState(false);

  const kakaoApiKey = import.meta.env.VITE_KAKAO_APP_KEY;

  const handleFindMyLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setCenter({ lat, lng });
      setIsMarker(true);
    });
  };

  const handleShareLocation = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoApiKey);
    }

    window.Kakao.Share.sendDefault({
      objectType: "location",
      address: `${center.lat}, ${center.lng}`,
      addressTitle: "내 위치",
      content: {
        title: "숙명여대 멋사 13기 프론트 실습",
        description: "나의 위치를 공유합니다.",
        imageUrl:
          "https://i.namu.wiki/i/o81kFfad6uoV0sN0iGSqA3hEKyIniZUhP7VBq2dI3WeyOFalhAEa_lQ_SY0GEbC_oJ4qzLlKokalWFk6cx86vg.webp",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      },
      social: {
        likeCount: 2200,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: "웹으로 보기",
          link: {
            mobileWebUrl: "https://developers.kakao.com",
            webUrl: "https://developers.kakao.com",
          },
        },
      ],
    });
  };
  return (
    <S.Wrapper>
      <S.H1>{title}</S.H1>
      <S.BtnContainer>
        <S.FindBtn onClick={handleFindMyLocation}>현재 내 위치 찾기</S.FindBtn>
        <S.ShareBtn onClick={handleShareLocation}>공유하기</S.ShareBtn>
      </S.BtnContainer>
      <KakaoMap center={center} isMarker={isMarker} />
    </S.Wrapper>
  );
};

export default MapContainer;
