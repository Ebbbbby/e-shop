import React from 'react'
import { useReducer } from 'react'
const reducer = (state, action)=>{
  switch (action.type) {
    case "increment":
      return{
        ...state,
        count: state.count + 1
      }
case "decrement":
  return {
    ...state,
    count: state.count - 1,
  };

    default:
      return {
        state
      }
  }
}

const initialState ={
  count : 0
}
const ImageData = () => {
const [input, setInput] = useState(0)
const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div>
        <label htmlFor="">Start Count</label>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Initialize Counter</button>
        <p>{state.count}</p>
      </div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Increment</button>
    </>
  );
}

export default ImageData