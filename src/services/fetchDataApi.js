import axios from 'axios';

export async function fetchImages( query, page, image_type, orientation, per_page) {
  const URL = 'https://pixabay.com/api/';
const API_KEY = '29162454-addc068f3f814e0a3a02d912a';
  // const PARAMS = {
  //   key: API_KEY,
  //   image_type: 'photo',
  //   orientation: 'horizontal',
  //   per_page: 15,
  //   page,
  //   q: query,
  // };
  try {
  const response = await axios.get(
  `${URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
  );
  return response.data;
} catch (error) {
  console.log('ERROR: ' + error);
}
}
