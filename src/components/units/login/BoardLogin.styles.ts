import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #121212;
  height: 100vh;
  width: 100%;
`;
export const Title = styled.p`
  color: #ececec;
  font-size: 2rem;
`;
export const Text = styled.p`
  color: #ececec;
  padding-bottom: 10px;
  padding-left: 10px;
`;
export const Email = styled.input`
  background-color: white;
  border-radius: 50px;
  width: 300px;
  height: 40px;
  font-size: 1rem;
  padding-left: 10px;
`;
export const Password = styled.input`
  background-color: white;
  border-radius: 50px;
  width: 300px;
  height: 40px;
  font-size: 1rem;
  padding-left: 10px;
`;
export const SignInBtn = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 50px;
  margin-right: 30px;
  background-color: #202020;
  color: #ececec;
  font-size: 1.25rem;
  transition: all 0.2s;
  :hover {
    background-color: #eaeaea;
    color: #121212;
  }
`;
export const LoginBtn = styled.button`
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
