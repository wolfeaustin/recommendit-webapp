export const ADD_ITEM = "addItem";

export function addItem(itemName, listId) {
  return {
    type: ADD_ITEM,
    payload: {
      name: itemName,
      list_id: listId
    }
  };
}
