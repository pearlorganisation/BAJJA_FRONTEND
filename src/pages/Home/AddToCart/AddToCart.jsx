import React from 'react'
import { useSelector } from 'react-redux'
import Carts from '../Carts';

const AddToCart = () => {
    const addToCart = useSelector(state=>state.addToCart);
    console.log(addToCart);
    
  return (
    <div>
    <div className='text-center max-w-8xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden grid md:grid-cols-4 space-x-8'>
        {addToCart.length > 0 ? addToCart.map(((item, index)=>(

        <Carts el={item} key={index}/>
        ))) : <h3 className='h-screen text-center w-full'>No Data Avaiable</h3>}
    </div></div>
  )
}

export default AddToCart