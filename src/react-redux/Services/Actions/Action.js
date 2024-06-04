import {Add_to_cart,Remove_to_cart} from '../Constants'

export const AddToCart = (data) => {
  // console.log("action data ",data)
  return {
    type:Add_to_cart,
    data:data
  }
}

export const RemoveToCart = ()=>{
  console.log("remove action")
  return{
    type:Remove_to_cart,
  }
}