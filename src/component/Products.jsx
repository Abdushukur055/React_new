import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "./first.product.css"
import { Link } from 'react-router-dom';


const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(()=>{
   axios.get('https://fakestoreapi.com/products').then((res)=>{
    setProduct(res.data)
   })
  })
  return (
    <div className='wrapper'>
      <h1 className='text-center'>Product</h1>
      <div className="box">
        {
          product.map((item,index)=>{
            return <div className="box2">
              <img className='img' src={item.image} alt="product" lazy="loading"/>
              <h6 className='text-center'>{item.title}</h6>
              <button className='btn btn-success'>
                <Link className='link' to={`/single/${item.id}`}>View details</Link>
              </button>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default Products;
