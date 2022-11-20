

const fetchSingleProduct = (url) => {
   return fetch(url)
   .then((response) => response.json())
   .then((data) => localStorage.setItem('phone', JSON.stringify(data)))
}
 export default fetchSingleProduct;

 