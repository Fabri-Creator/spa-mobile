const getMovile = () => {
    let localItems = window.localStorage.getItem('movile')
    return JSON.parse(localItems)
}
export default getMovile;