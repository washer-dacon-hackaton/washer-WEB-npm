import client from "./index";

const userAPI = {
  POST_LOGIN: async ({ Email, Password }) => {
    const response = await client.post(`/users/login/`, {
      email: Email,
      password: Password,
    });
    return response.data;
  },
};

export default userAPI;
