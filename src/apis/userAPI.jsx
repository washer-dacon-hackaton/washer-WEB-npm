import client from "./index";

const userAPI = {
  POST_LOGIN: async ({ Email, Password }) => {
    const response = await client.post(`/users/login/`, {
      email: Email,
      password: Password,
    });
    return response.data;
  },
  GET_USER_INFO: async ({ Name }) => {
    const response = await client.get(`/user/${Name}`);
    return response.data; // name, country, lang
  },
};

export default userAPI;
