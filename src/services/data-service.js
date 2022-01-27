import axios from "axios";

function DataService() {
  let data = axios.get("https://jsonplaceholder.typicode.com/users").then(
    (res) => {
      return res.data;
    },
    (err) => {
      return err;
    }
  );
  return data;
}

export default DataService;
