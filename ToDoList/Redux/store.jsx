import { createStore } from "redux";

const initialState = {
  items: [
    { id: "123", text: "go to market" },
    { id: "234", text: "finish work" },
  ],
};

//reducer
function todoList(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { id, text } = action.payload;
      return {
        ...state,
        id: Math.random(),
        text: action.text,
        items: [...state.items, id, text],
      };
    }
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
export const addItem = (text) => ({
  type: "ADD_ITEM",
  payload: {
    text,
  },
});

export const delItem = (id) => ({
  type: "DELETE_ITEM",
  payload: {
    id,
  },
});
