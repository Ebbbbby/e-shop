import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {

  const reducer =(state, action)=>{
    switch (action.type) {
      case "ADD":
        const tempState = state.filter((item) => action.payload.id === item.id);
        if (tempState.length > 0) {
          return state;
        } else {
          return [...state, action.payload];
        }

      case "INCREMENT":
        const increase = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return increase;

      case "DECREMENT":
        const decrease = state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
        return decrease;

      case "REMOVE":
        const remove = state.filter((item) => item.id!== action.payload.id);

        return remove

      default:
        return state;
    }
  }
    const [state, dispatch] = useReducer(reducer, []);
   const contextValue = {state,dispatch};
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}





