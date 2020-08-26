import apiSauce from 'apisauce';
import ApiConfig from '../Configs/ApiConfig'

const create = (baseURL = ApiConfig.baseURL + '/users') => {
  const api = apiSauce.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
    timeOut: 30000,
  });

  function getMeApi(token) {
    api.setHeaders({ Authorization: `Bearer ${token}` })
    return api.get('/me')
  }

  function getFeaturedPhotos(token, userId) {
    api.setHeaders({ Authorization: `Bearer ${token}` })
    return api.get(`${userId}/featured-photos`)
  }

  return {
    getMeApi,
    getFeaturedPhotos
  };
};

export default {
  create,
};
