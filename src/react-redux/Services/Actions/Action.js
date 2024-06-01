import {Add_to_cart} from '../Constants'

export const AddToCart = (data) => {
  return {
    type:Add_to_cart,
    data:data
  }
}

export default AddToCart
