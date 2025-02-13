import React from 'react'
import Cart from './Cart'
import File from './File'
import Main from './Main'
import ProductDescription from './ProductDescription'
import Product from '../Product'

export default function page() {
  return (
    <div>
   <File/>
        <Cart/>
<Main/>
<ProductDescription/>
<Product />
    </div>
  )
}
