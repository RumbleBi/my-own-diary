import * as C from "./BoardWrite.styles";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function BoardWriteUI(props: any) {
  return (
    <C.Wrapper>
      <C.TitleInput type="text" placeholder="제목을 입력하세요" />
      <C.TagsInput type="text" placeholder="태그를 입력하세요" />
      <C.TagsWrapper>
        <C.Tags>태그1qewef</C.Tags>
      </C.TagsWrapper>
      <Editor
        // placeholder="내용을 입력해주세요"
        useCommandShortcut={false} // 키보드 입력 컨트롤 방지
        initialValue="당신의 이야기를 적어보세요..."
        previewStyle="tab" // 미리보기 스타일 지정
        minHeight="500px" // 에디터 창 높이
        initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
        toolbarItems={[
          // 툴바 옵션 설정
          [
            "heading",
            "bold",
            "italic",
            "strike",
            "hr",
            "quote",
            "ul",
            "ol",
            "task",
            "indent",
            "outdent",
            "link",
            "code",
          ],
        ]}
      ></Editor>
    </C.Wrapper>
  );
}
