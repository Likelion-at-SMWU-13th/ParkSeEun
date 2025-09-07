import { useContext } from "react";
import Content from "./components/Content";
import { styled } from "styled-components";
import ContentContext from "./contexts/ContentContext";

function App() {
  const part = useContext(ContentContext);
  return (
    <ContentContext.Provider value={""}>
      <Wrapper>
        <div className="title">
          숙명여대 멋쟁이사자처럼 <span>{part}</span> 파트 구성원
        </div>
        <Content />
      </Wrapper>
    </ContentContext.Provider>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  .title {
    text-align: center;
    padding: 50px 0;
    font-size: 30px;
    font-weight: 700;
    span {
      color: #ee7521;
    }
  }
`;
