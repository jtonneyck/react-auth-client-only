import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://ih-beers-api.herokuapp.com/',
    withCredentials: true,
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  });

export const getMyBeers = ()=> {
    return axios({
        method: "GET",
        url: "user/my-beers"
    })
}