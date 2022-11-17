
const useFetch = (url) => {
   return fetch(url)
   .then((response) => response.json())
   .then((data) => data)
}
 export default useFetch;