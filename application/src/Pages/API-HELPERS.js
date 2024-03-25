import axios from "axios";

export async function GET_ALL_ITEMS() {
  const { data } = await axios.get("https://localhost:3000/api/items");

  console.log(data);
}

export default GET_ALL_ITEMS;
