import React from 'react';

function ProductBox(props){
    
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt=''/>
            </div>
            <div className='a-b-text'>
                <h2> {props.title} </h2>
                <span className='productbox-price'>R${props.price}</span>
            </div>
        </div>
    )
}

export default ProductBox;