import axios from "axios";

const FIRST_API_URL = "http://localhost:3000";

export const getPosts = async () => {
  try {
    const response = await axios({
      url: `${FIRST_API_URL}/flights`,
      method: "GET",
      params: { offset: 0, limit: 10 },
    });
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    throw error;
  }
};
