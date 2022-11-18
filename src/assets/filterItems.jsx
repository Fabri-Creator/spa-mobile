const filterItems = (filtrado, localItems) => {
    let filteredItems;

    filteredItems = localItems.filter(
      (movile) =>
        movile.brand.includes(filtrado) || movile.model.includes(filtrado)
    );
    return filteredItems;
}

export default filterItems;