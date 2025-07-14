import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const WritePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const getDetail = (id) => {
    axios
      .get(`http://127.0.0.1:8000/entries/${id}/`)
      .then((response) => {
        console.log(response);
        setAuthor(response.data.author);
        setComment(response.data.comment);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChangeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  const UpdateComment = (id) => {
    axios
      .put(`http://127.0.0.1:8000/entries/${id}/`, {
        author: author,
        comment: comment,
      })
      .then((response) => {
        console.log(response);
        alert("게시글 수정이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("게시글 수정에 실패했습니다.");
      });
  };

  useEffect(() => {
    getDetail(id);
  }, [id]);

  return (
    <Wrapper>
      <FormGroup>
        <InputLabel>이름</InputLabel>
        <StyledInput
          placeholder="이름을 입력해주세요."
          value={author}
          onChange={onChangeAuthor}
        />
      </FormGroup>
      <FormGroup>
        <InputLabel>내용</InputLabel>
        <StyledTxtarea
          placeholder="게시글 내용을 입력해주세요."
          value={comment}
          onChange={onChangeComment}
        />
      </FormGroup>
      <BtnWrapper>
        <Button txt="수정하기" onBtnClick={() => UpdateComment(id)} />
      </BtnWrapper>
    </Wrapper>
  );
};

export default WritePage;

const Wrapper = styled.div`
  margin-top: 3.125rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const InputLabel = styled.div`
  color: var(--text-black);
  font-size: 1.875rem;
  font-weight: 700;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  padding: 0.625rem 1.875rem;
  border-radius: 0.9375rem;
  width: 18.75rem;
  height: 3.125rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-black);
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;

const StyledTxtarea = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 12.5rem;
  background-color: white;
  padding: 1.875rem;
  border-radius: 0.9375rem;
  font-size: 1.125rem;
  font-weight: 700;
  resize: none;
  color: var(--text-black);
  &::placeholder {
    color: #acacac;
    font-weight: 700;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
