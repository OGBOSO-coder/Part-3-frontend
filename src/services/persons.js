import axios from "axios";
const baseUrl = "/api/persons/";

const getAll = () => {
  const request = axios.get(baseUrl);
  // return request.then((response) => response.data);
  const nonExisting = {
      "name": "no exists",
      "number": "",
      "id": 11,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = (person) => {
  const request = axios.post(baseUrl, person);
  return request.then((response) => response.data);
};

const update = (id, person) => {
  const request = axios.put(`${baseUrl}/${id}`, person);
  return request.then((response) => response.data);
};

const deleteById = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, update, deleteById };
