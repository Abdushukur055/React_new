import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Single_product = () => {
    const [single, setSingle] = useState([])
    useEffect(() => {
        let id = window.location.href.split('/')[4]
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setSingle(res.data)
            console.log(res.data);
        })
    }, [])
    return (
        <div className='first_box'>
            <div className="single_box">
                <img className='img1' src={single.image} alt="single" lazy="loading" />
                <div className="box5">
                    <h2>{single.title}</h2>
                    <h1><i>Price: $</i> {single.price}</h1>
                    <h2>Product description</h2>
                    <div className="line"></div>
                    <h5 className='text'>{single.description}</h5>
                    <button className='btn2'>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Single_product;
