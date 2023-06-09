import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddData } from '../services/api';
import { BackBtn } from '../Componentes/Buttons';
import VerifyCheck from './Auth/VerifyCheck';

export default function AddCar() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        carname: '',
        cartype: '',
        carprice: '',
        carkms: '',
        carimg: '',
    });

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
            await AddData(product);
            alert('Car added!');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='dashboard-content'>
            <VerifyCheck/>
            <div className='cardx form-data-align'>
                <form onSubmit={handleSubmit} className='form-data-card '>
                    <input type='text' placeholder='Car' name='carname' value={product.carname} onChange={handleInputChange} className='product-input' required/>
                    <input type='text' placeholder='Type' name='cartype' value={product.cartype} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Price' name='carprice' value={product.carprice} onChange={handleInputChange} className='product-input' required />
                    <input type='number' placeholder='Distance' name='carkms' value={product.carkms} onChange={handleInputChange} className='product-input' required />
                    <input type='text' placeholder='Car img URL' name='carimg' value={product.carimg} onChange={handleInputChange} className='product-input' required />
                    <button type='submit' className='button2'>Add Car</button>
                </form>
            </div>
            <BackBtn />
        </div>
    );
}
