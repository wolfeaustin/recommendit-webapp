import { ADD_ITEM } from "../Actions/itemActions";

let nextID = 2;

export default function itemReducer(state = [], { type, payload }) {
  switch (type) {
    case ADD_ITEM:
      return state;

    default:
      return state;
  }
}
