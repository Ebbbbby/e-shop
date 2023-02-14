import { createContext, useReducer } from "react";

export const CartContext = createContext();

export const Context = (props) => {

  const reducer =(state, action)=>{
    switch (action.type) {
      case 'ADD':
        const tempState = state.filter((item)=> action.payload.id === item.id)
        if(tempState.length > 0){
          return state;
        }else{
         return [...state, action.payload];
        }

      default:return state

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





