import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #121212;
  height: 100%;
  width: 100%;
`;
export const WrapperTop = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 200px;
  color: #ececec;
  margin-bottom: 50px;
  border-bottom: 1px solid #eaeaea;
`;
export const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 40px;
  font-weight: bold;
`;
export const WrapperInfo = styled.div`
  display: flex;
  font-size: 1.25rem;
  justify-content: space-between;
  button {
    color: #ececec;
    font-size: 1.25rem;
    margin-left: 10px;
  }
  margin-bottom: 20px;
`;
export const WrapperTags = styled.div`
  margin-bottom: 30px;
`;
export const Tags = styled.span`
  padding: 5px 15px;
  border-radius: 50px;
  color: #62e6be;
  background-color: #202020;
  margin-right: 10px;
`;
export const WrapperMid = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
`;
export const TitleImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: green;
`;
export const Contents = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: blue;
`;
export const WrapperBot = styled.div`
  display: flex;
  width: 800px;
  height: 100px;
  background-color: gray;
  align-items: center;
  justify-content: space-around;
`;
export const NickName = styled.span`
  color: #ececec;
  font-size: 1.25rem;
`;
export const MainBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 50px;
  background-color: #202020;
  color: #ececec;
  font-size: 1.25rem;
  transition: all 0.2s;
  :hover {
    background-color: #eaeaea;
    color: #202020;
  }
`;
