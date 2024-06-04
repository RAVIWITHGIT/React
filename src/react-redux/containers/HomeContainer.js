import {connect} from 'react-redux'
import Home from '../components/Home'
import { AddToCart,RemoveToCart } from '../Services/Actions/Action'


const mapStateToProps=state=>({
  data:state.carditems

})

const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(AddToCart(data)),
  RemoveToCartHandler:data=>dispatch(RemoveToCart(data))
  
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)



// export default Home;