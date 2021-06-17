import axios from "axios";

export default axios.create({
  baseURL: "https://sehat.herokuapp.com/api",
});
// export default axios.create({
//   baseURL: "http://localhost:3000/api",
// });
