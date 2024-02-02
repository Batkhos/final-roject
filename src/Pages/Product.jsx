import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breaknum from '../Components/breaknum/Breaknum';
import { ShopContext } from '../Context/ShopContext'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


export default function Product() {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breaknum product={product}  />
      <ProductDisplay product={product}/>
      <RelatedProducts  />
    </div>
  )
}
