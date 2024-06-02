import {connect} from 'react-redux'
import Home from '../components/Home'
import { AddToCart } from '../Services/Actions/Action'


const mapStateToProps=state=>({
  cardData:state

})

const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(AddToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)



// export default Home;