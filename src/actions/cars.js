import { API_URL } from '../utils/js/consts';

const getCars = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

export default getCars;