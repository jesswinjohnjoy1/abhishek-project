import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';

export default function ViewCar() {
    const { productId } = useParams();
    const [product, setProduct] = useState({
        carname: '',
        cartype: '',
        carprice: '',
        carkms: '',
        carimg: '',
    });

    useEffect(() => {
        fetchProduct();
    }, []);

    const fetchProduct = async () => {
        try {
            const response = await FindData(productId);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='product-view'>
            <div className='product-container-main cardx'>
                <div className='product-img-main card-container'>
                    <img src={product.carimg} alt='-image' className='product-cover' />
                </div>
                <div className='product-content-main'>
                    <h1 className='product-title'>{product.carname}</h1>
                    <h3 className='product-price'>Price : {product.carprice}</h3>
                    <h3 className='product-rating'>Distance : {product.carkms}</h3>
                </div>
            </div>
            <BackBtn />
        </div>
    );
}
