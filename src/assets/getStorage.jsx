
const getStorage = () => {
    let localItems = window.localStorage.getItem('items')
    return JSON.parse(localItems)
}
export default getStorage

