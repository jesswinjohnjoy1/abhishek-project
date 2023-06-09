import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EditData, FindData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function EditCar() {
    const { productId } = useParams();
    const navigate = useNavigate();
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
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await EditData(productId, product);
            alert('Car Updated !');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card'>
                    <label>Car Name</label>
                    <input type='text' placeholder='Car Name' name='carname' value={product.carname} onChange={handleInputChange} className='product-input' required />
                    <label>Car Type</label>
                    <input type='text' placeholder='Car Type' name='cartype' value={product.cartype} onChange={handleInputChange} className='product-input' required />
                    <label>Car Price</label>
                    <input type='number' placeholder='Car Price' name='carprice' value={product.carprice} onChange={handleInputChange} className='product-input' required />
                    <label>Distance</label>
                    <input type='number' placeholder='Distance' name='carkms' value={product.carkms} onChange={handleInputChange} className='product-input' required />
                    <label>Car Image URL</label>
                    <input type='text' placeholder='Car img URL' name='carimg' value={product.carimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Update Car</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
