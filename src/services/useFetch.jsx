
const useFetch = (url) => {
   return fetch(url)
   .then((response) => response.json())
   .then((data) => localStorage.setItem('items', JSON.stringify(data)))
}

 export default useFetch;