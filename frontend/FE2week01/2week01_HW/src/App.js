import Content from "./components/Content";
import { styled } from "styled-components";
import ContentProvider from "./contexts/ContentContext";
import { useContent } from "./contexts/ContentContext";

function App() {
  return (
    <ContentProvider>
      <Wrapper>
        <div className="title">
          <Title />
        </div>
        <Content />
      </Wrapper>
    </ContentProvider>
  );
}

const Title = () => {
  const { part } = useContent();
  return (
    <>
      숙명여대 멋쟁이사자처럼 <span>{part}</span> 파트 구성원
    </>
  );
};

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
