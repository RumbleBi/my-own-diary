import * as C from "./BoardLogin.styles";

export default function BoardLoginUI() {
  return (
    <C.Wrapper>
      <C.Title>My Own Diary</C.Title>
      <div>
        <C.Text>이메일</C.Text>
        <C.Email type="text" />
      </div>
      <div>
        <C.Text>비밀번호</C.Text>
        <C.Password type="password" />
      </div>
      <div>
        <C.SignInBtn>회원가입</C.SignInBtn>
        <C.LoginBtn>로그인</C.LoginBtn>
      </div>
    </C.Wrapper>
  );
}
