import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #121212;
  height: 100%;
  width: 100%;
`;
export const WrapperProfile = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  height: 300px;
  border-bottom: 1px solid #eaeaea;
  margin-bottom: 50px;
`;
export const ID = styled.p`
  color: #ececec;
  font-size: 2rem;
`;
export const WriteBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 50px;
  background-color: #202020;
  color: #ececec;
  font-size: 1.25rem;
  transition: all 0.2s;
  :hover {
    background-color: #eaeaea;
    color: #121212;
  }
`;
export const WrapperContents = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  min-height: 500px;
  cursor: pointer;
  margin-bottom: 50px;
  border-bottom: 1px solid #eaeaea;
`;
export const TitleImage = styled.div`
  width: 600px;
  height: 300px;
  background-color: red;
  margin-bottom: 10px;
`;
export const Title = styled.h1`
  color: #eaeaea;
  margin-bottom: 10px;
`;
export const ShortTitle = styled.p`
  color: #eaeaea;
`;
