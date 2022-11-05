import axios from "axios";
// 요청과 응답 처리를 위해 axios 사용
// get, post 등등

// 글 조회
function GetContent() {}

// 글 생성
function CreateContent(title, user) {
  return async (dispatch, getState) => {
    const content = await axios({
      method: "post",
      url: "http://localhost:8000/createContent",
      data: {
        id: "ididididdidd",
      },
    });
    console.log(content);
  };
}

// 글 삭제
function DeleteContent() {}

// 글 수정
function UpdateContent() {}

export const ContentFn = {
  GetContent,
  CreateContent,
  DeleteContent,
  UpdateContent,
};
