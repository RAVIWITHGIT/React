import {Add_to_cart,Remove_to_cart} from '../Constants'


const initialState={
  cardData:[]
}

export default function carditems(state=[],action){
  // console.log("state",state)
  switch(action.type){
    case Add_to_cart:
      // console.log("reducer ",action)
      // console.log("state add_to_cart",state)
      return [
        ...state,
        {cardData:action.data}
  ]
    case Remove_to_cart:
      state.pop()
      return [
        ...state
  ]
      break;
    default:
      return state  
  }
}