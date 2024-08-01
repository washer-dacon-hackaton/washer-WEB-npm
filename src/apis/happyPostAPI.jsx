import client from "./index";

const happyPostAPI = {
  WRITE_HAPPY_POST: async (User, Title, Content) => {
    const response = await client.post(`/posts/${User.name}/`, {
      title: Title,
      content: Content,
    });
    console.log("글쓰기 성공");
    return response.data; // message, post_id
  },

  GET_HAPPY_POST: async (User, Id) => {
    const response = await client.get(`/post/${User}/`, {
      post_id: Id,
    });
    console.log("글 가져오기 성공");
    return response.data; // writer, created_at, title, content, ai_feedback
  },

  LIKE: async (User, Id) => {
    const response = await client.patch(`/posts/${User.name}/`, {
      post_id: Id,
    });
    console.log("좋아요 성공");
    return response.data; // message
  },
};

export default happyPostAPI;
