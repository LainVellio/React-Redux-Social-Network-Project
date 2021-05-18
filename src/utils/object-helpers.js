export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  newOpjProps,
) => {
  return items.map((i) => {
    if (i[objPropName] === itemId) {
      return { ...i, ...newOpjProps };
    }
    return i;
  });
};
