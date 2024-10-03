import React, { Component } from 'react';
import './index.css'
const SimpleItem = (props) => {

    const { list, deleleitem } = props;
    console.log(list)
    console.log("this is for SimpleItem file:")
    const { id, title } = list;

    const deletItem = (props) => {
        // console.log("item delete with id:" + id)
        deleleitem(id);
    }

    return (
        <>
            <div className='order-list-container'>
                <li className='order-list-item'> <p>{title}</p></li>
                <button type='submit' className='order-list-delete-button' onClick={deletItem}>TO Delete</button>
            </div>

        </>
    )
}

export default SimpleItem;
