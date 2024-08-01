import client from "./index";

const happyReportAPI = {
  GET_ONE_REPORT: async () => {
    const response = await client.get();
    return response.data;
  },
};

export default happyReportAPI;
