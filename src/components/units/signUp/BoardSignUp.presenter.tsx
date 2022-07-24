import * as C from "./BoardSignUp.styles";

export default function BoardSignUpUI() {
  return (
    <C.Wrapper>
      <C.Title>회원가입</C.Title>
      <div>
        <C.Text>이메일</C.Text>
        <C.Email type="text" />
      </div>
      <div>
        <div style={{ marginBottom: "50px" }}>
          <C.Text>비밀번호</C.Text>
          <C.Password type="password" />
        </div>
        <div>
          <C.Text>비밀번호확인</C.Text>
          <C.Password type="password" />
        </div>
      </div>

      <C.SignInBtn>가입하기</C.SignInBtn>
    </C.Wrapper>
  );
}
