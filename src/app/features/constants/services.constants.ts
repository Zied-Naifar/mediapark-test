const URL = {
  baseApiUrl: () => 'https://api.unsplash.com',
  auth: {
    authenticate: '/oauth/authorize',
    getToken: '/oauth/token',
  },
  images: {
    fetchImages: '/search/photos',
  },
}

export default URL
