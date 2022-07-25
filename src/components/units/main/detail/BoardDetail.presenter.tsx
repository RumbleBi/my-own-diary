import * as C from "./BoardDetail.styles";

export default function BoardDetailUI() {
  return (
    <C.Wrapper>
      <C.WrapperTop>
        <C.Title>게시글제목</C.Title>
        <C.WrapperInfo>
          <span>2022.7.26</span>
          <div>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </C.WrapperInfo>
        <C.WrapperTags>
          <C.Tags>태그1</C.Tags>
          <C.Tags>태그2</C.Tags>
          <C.Tags>태그3</C.Tags>
        </C.WrapperTags>
      </C.WrapperTop>
      <C.WrapperMid>
        <C.TitleImage>TitleImage</C.TitleImage>
        <C.Contents>내용</C.Contents>
      </C.WrapperMid>
      <C.WrapperBot>
        <C.NickName>olzlel2000@naver.com</C.NickName>
        <C.MainBtn>메인 메뉴</C.MainBtn>
      </C.WrapperBot>
    </C.Wrapper>
  );
}
