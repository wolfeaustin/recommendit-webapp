import rootReducer from "./Reducers/root.js";
import { createStore } from "redux";
const store = createStore(
  rootReducer,
  {
    items: [
      {
        name: "Mac Miller - Stay",
        link: "www.youtube.com/macmiller",
        id: 1,
        type: "music"
      },
      {
        name: "Shawshank Redemption",
        link: "www.imdb.com",
        id: 2,
        type: "movie"
      }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
