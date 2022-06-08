import React, { useState, useEffect } from 'react'
import apiClient from '../util/apiClient';
import { Form } from './Form';
import Phone from './Phone';

export const PhoneView = () => {
    const [phones,setPhones] = useState([]);

    const fetchPhones = async () =>{
        const {data} = await apiClient.get('/phones');
        setPhones(data);
    }
    useEffect(()=>{
        fetchPhones()
    },[])
    const createPhone = async (phone) =>{
        const {data} = await apiClient.post('/phones', phone);
        setPhones([...phones, data])
    }
    return (
        <div>
            <Form createPhone={createPhone}/>
            <Phone phones={phones} />
        </div>
    )
}
