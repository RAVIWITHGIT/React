import {Add_to_cart} from '../Constants'


const initialState={
  cardData:[]
}

export default function carditems(state=initialState,action){
  switch(action.type){
    case Add_to_cart:
      console.log("reducer ",action)
      return {
        ...state,
        cardData:action.data
      }
      break;
    default:
      return state  
  }
}