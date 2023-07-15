// const url = 'https://api.thecatapi.com/v1';
// const api_key =
//     'live_i0tDaOGInqQ26rh7JUwZgUxN2ia9tgGfeQAmLlGg5e4sjZuijJKVoZO121TcrnQ9';
  

    import axios from 'axios';

    axios.defaults.headers.common['x-api-key'] =
      'live_s9nDVVfHcQyg4507rX4F7KMh8c4FAQ2hjAfNURKKpjQz5jZp4MsVtCi3Eqdbw9M5';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
    
export function fetchBreeds() {
  return axios.get(`/breeds/`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get(
    `/images/search?breed_ids=${breedId}`
  ).then(response => {
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  });
}
