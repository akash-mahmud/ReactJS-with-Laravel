import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToOrder, removeFromOrder } from '../actions/orderActions';
import Messagebox from '../components/MessageBox'
import {Link} from 'react-router-dom'

function OrderScreen(props) {
  const productId = props.match.params.id ;
  const qty = props.location.search? Number(props.location.search.split('=')[1]):1 
  
  const order = useSelector(state => state.order)
  const {orderItem} = order
  const dispatch = useDispatch();
  useEffect(() => {
     if(productId){
       dispatch(addToOrder(productId , qty))
     }
  }, [productId , qty])
  const removeHandler = (id) => {
    //delete action
    dispatch(removeFromOrder(id))
  }
  const orderHandler = () => {
     props.history.push('/signin?redirect=shipping')
  }
  return (
    <>
<div className="order_head ">

      <h1 >
        Order List  </h1>

  <div className="row top tm-gallery">
   
    <div className=" tm-gallery-page">
    <div className="tm-gallery-item">
<article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">

        {orderItem.length === 0? <Messagebox>
          Order List is Empty. <Link to='/'>Go to Home</Link>
        </Messagebox>
        :
        (
          <>
          <ul className="order">
            {
              orderItem.map((item) => (
                <li key={item.product}>
                  <div className="row">
                    <div>
                      <img src={item.image} alt={item.name}  className="small"/>
                    
                    </div>
                    <div className="min-30">
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                 <p> <strong>{item.price}</strong></p>
                 <button type="button"
                 onClick={() => removeHandler(item.product)}
                  className=" btn-delete">Delete</button>
                    </div>
                    
                  </div>
                </li>
          
              ))
            }
          </ul>
          </>
        )
        }
</article>

    
    </div>
  </div>
  <div className="order_now tm-gallery-page">
  <h3>
    Subtotal ({orderItem.reduce((a,c) => a+c.qty , 0 )} items): 
    {orderItem.reduce((a,c) => a+c.price * c.qty , 0 )}
  </h3>
       <button type='button' className="order_button" onClick={orderHandler}
       disabled={orderItem.length === 0}
       >Order All Now</button>
  </div>
  </div> 
  </div>
    </>
  )
}

export default OrderScreen
