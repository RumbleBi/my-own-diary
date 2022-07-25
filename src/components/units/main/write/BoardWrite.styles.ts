import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  background-color: #121212;
  height: 100%;
  width: 100%;
`;
export const TitleInput = styled.input`
  width: 800px;
  height: 50px;
  margin-top: 200px;
  font-size: 2rem;
  color: white;
  font-weight: bold;
  ::placeholder {
    color: #ececec;
  }
  margin-bottom: 30px;
  :focus {
    border-bottom: 1px solid #eaeaea;
  }
`;
export const TagsInput = styled.input`
  width: 800px;
  height: 30px;
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  ::placeholder {
    color: #ececec;
  }
  :focus {
    border-bottom: 1px solid #eaeaea;
  }
`;
export const TagsWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  width: 800px;
  height: 50px;
`;
export const Tags = styled.span`
  color: #62e6be;
  background-color: #202020;
  border-radius: 50px;
  padding: 10px 10px;
`;
