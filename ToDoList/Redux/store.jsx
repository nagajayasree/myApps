import { createStore } from "redux";

const initialState = {
  items: [{ id: 1, text: "play tennis" }],
  // input: "hello",
};

//reducer
function todoList(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state.items,
        {
          id: Math.random(),
          text: action.text,
        },
      ];
    case "DELETE_ITEM":
      return state.items.map((item) =>
        item.id === action.id ? { ...item, id: !item.id } : item
      );
    default:
      return state;
  }
}

//store
export const store = createStore(todoList);

//actions
export const addItem = (id, text) => ({
  type: "ADD_ITEM",
  id,
  text,
});

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  id,
});
