import * as C from "./BoardList.styles";

export default function BoardListUI() {
  return (
    <>
      <C.Wrapper>
        <C.WrapperProfile>
          <C.ID>olzlel2000@naver.com</C.ID>
          <C.WriteBtn>새 글 작성</C.WriteBtn>
        </C.WrapperProfile>
        <C.WrapperContents>
          {/* 인피니트 스크롤 = div태그 부분 */}
          <div>
            {/* data map으로 돌리기 */}
            <C.Contents>
              <C.TitleImage></C.TitleImage>
              <C.Title>제목입니다</C.Title>
              <C.ShortTitle>블라블라블라블라블라블라</C.ShortTitle>
            </C.Contents>
            <C.Contents>
              <C.TitleImage></C.TitleImage>
              <C.Title>제목입니다</C.Title>
              <C.ShortTitle>블라블라블라블라블라블라</C.ShortTitle>
            </C.Contents>
            <C.Contents>
              <C.TitleImage></C.TitleImage>
              <C.Title>제목입니다</C.Title>
              <C.ShortTitle>블라블라블라블라블라블라</C.ShortTitle>
            </C.Contents>
          </div>
        </C.WrapperContents>
      </C.Wrapper>
    </>
  );
}
