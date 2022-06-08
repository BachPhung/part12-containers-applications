import React from 'react'

const Phone = ({phones}) => {
  return (
    <div>
        <h3>Phone list</h3>
        <ul>
            {phones.map(phone=><li>{phone.phone} - {phone.name}</li>)}
        </ul>
    </div>
  )
}

export default Phone