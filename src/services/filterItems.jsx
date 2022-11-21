const filterItems = (filtrado, localItems) => {
    let filteredItems;

    filteredItems = localItems.filter(
      (mobile) =>
        mobile.brand.includes(filtrado) || mobile.model.includes(filtrado)
    );
    return filteredItems;
}

export default filterItems;