const getMobile = () => {
    let localItems = window.localStorage.getItem('phone')
    return JSON.parse(localItems) || {};
}
export default getMobile;