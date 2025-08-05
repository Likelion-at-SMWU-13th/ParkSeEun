import React from "react";

const kakaoApiKey = import.meta.env.VITE_KAKAO_APP_KEY;

const useKakaoShare = () => {
  const shareKakaoLocation = (center) => {
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

  return { shareKakaoLocation };
};

export default useKakaoShare;
