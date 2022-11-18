const url = 'https://front-test-api.herokuapp.com/api/product/ZmGrkLRPXOTpxsU4jjAcv'

const useFetch = (url) => {
   return fetch(url)
   .then((response) => response.json())
   .then((data) => localStorage.setItem('items', JSON.stringify(data)))
}

 export default useFetch;