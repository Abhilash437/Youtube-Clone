import axios from "axios"

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '294a92d7a6mshbbad21f40a30e60p1f06d1jsnb865bffe113b',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async(url) => {
      const {data} = await axios.get(`${BASE_URL}/${url}`,options);
      return data;
  }