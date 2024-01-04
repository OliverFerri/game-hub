import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2756dcbd30904043826adc5f80e0d776",
  },
});
