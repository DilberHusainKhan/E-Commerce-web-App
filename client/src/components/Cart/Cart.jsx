import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import {useSelector} from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { useDispatch } from "react-redux";
const Cart = () => {
    // const data = [
    //     {
    //         id:1,
    //         title:"Long Sleeve Graphic T-Shirt",
    //         isNew:true,
    //         img:"https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2:"https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         oldPrice:20,
    //         desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged.",
    //         price:15
    //     },
    // ]
    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();
    const totalPrice =()=>{
        let total =0;
        products.forEach(element => (total += element.quantity*element.price));
        return total.toFixed(2);
    } 

  return (
    <div className='cart'>
        <h1>Product is in your cart</h1>
         {products.map(item=>(
            <div className="item" key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL +item.img} alt="" />
                <div className="details" >
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,50)}</p>
                    <div className="price">{item.quantity}x &#x20B9;{item.price}</div>
                </div>
                <DeleteOutlinedIcon className='delete' onClick={()=>dispatch(removeItem(item.id))}/>
            </div>
         ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>&#x20B9;{totalPrice()}</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart