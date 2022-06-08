import React, { useState } from 'react'

export const Form = ({createPhone}) => {
    const [phoneNumber, setPhoneNumber] = useState();
    const [name, setName] = useState();

    const changePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
        console.log(phoneNumber);
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPhone({
            phone: phoneNumber,
            name: name
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems:'center',
                
            }}>
                <label>
                    Phone:
                    <input value={phoneNumber} type='text' name='phone' onChange={changePhoneNumber} />
                </label>
                <label style={{margin: '8px'}}>
                    User:
                    <input value={name} type='text' name='user' onChange={e => changeName(e)} />
                </label>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}
