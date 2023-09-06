// export const BASEURL = 'https://dummyjson.com/users'
import axios from "axios";

export default axios.create({
  baseURL: "https://reqres.in/api/",
  headers: {
    "Content-type": "application/json"
  }
});