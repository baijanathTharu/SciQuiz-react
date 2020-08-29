import axios from "axios";

const axiosQuiz = axios.create({
  baseURL: "https://opentdb.com",
});

export default axiosQuiz;
