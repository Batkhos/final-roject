import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

export default function ProductDisplay(props) {
    const {product} = props;
    const {AddToCart} = useContext(ShopContext)
    
  return ( 
    <div className='all'>
        <div className='part-left'>
            <div className='img-list'>
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className='prnc-img'>
                <img className='main-img' src={product.image} alt="" />
            </div>
       </div>
        <div className='part-right'>
          <h1>{product.name}</h1>
          <div className="stars">
            <i class="fa-sharp fa-solid fa-star" style={{color : 'orange'}}></i>
            <i class="fa-sharp fa-solid fa-star" style={{color : 'orange'}}></i>
            <i class="fa-sharp fa-solid fa-star" style={{color : 'orange'}}></i>
            <i class="fa-sharp fa-solid fa-star" style={{color : 'orange'}}></i>
            <i class="fa-regular fa-star"></i>
            <p>(120)</p>
          </div>       
            <div className='prices'>
              <div className='new-price'>{product.new_price} DH</div>
              <div className='old-price'>{product.old_price} DH</div>
            </div>
            <div className='decription'>{product.disc}</div>
            <div className='size'>
                <h1>Select Size</h1>
                  <div className='size-kinds'>
                    <div className='kind'>S</div>
                    <div className='kind'>M</div>
                    <div className='kind'>X</div>
                    <div className='kind'>XL</div>
                    <div className='kind'>XXL</div>
                </div>
                
            </div>
            <button className='buy' onClick={()=>{AddToCart(product.id)}}>ADD TO CART</button>
            <div className='category'>
            <p> <span>category : </span>{product.category} , T-Shirt , Crop Top</p>
            <p> <span>Tags : </span>Modern, Latest</p> 
            </div>
             
        </div> 
    </div>
  )
}
