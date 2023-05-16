import { useContext } from "react"
import CartProducts from "../components/CartProducts"
import Floor from "../components/Floor"
import TopNav from "../components/TopNav"
import AppContext from "../context/AppContext"
import CartSummary from "../components/CartSummary"
import ShoppingCard from "../components/ShoppingCard"


const CartPage = () => {
  const {cart} = useContext(AppContext)
  return (
    <div>
      <TopNav/>
      <div className="container">
        <ShoppingCard/>
        <CartSummary/>
        {cart.map((p,index) => (
          <CartProducts 
          key={index}
          pImg={p.pImg}
          name={p.name}
          price={p.price}
          />
        ))}
      </div>
  
      <Floor/>
    </div>
  )
}

export default CartPage