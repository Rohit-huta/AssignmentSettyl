import React from 'react'
import '../assets/data'
import { data } from '../assets/data'
import Card from '../components/Card';
const Home = () => {

  return (
    <div className='container p-4 '>
        <div className='text-center'>
            <h1 className='text-2xl'>Store</h1>
            <p>Welcome to the store! Here you can find a variety of products.</p>
        </div>
        <hr className='my-3'/>

     
        <div className='md:grid md:grid-rows-3 md:grid-cols-3 md:gap-y-4'>
        {
            data.map(({id, image, title, description}) => {
                return (
                   
                      <Card image={image} title={title} description={description}/>
                   
                )
            })
        }  
        </div>      
 
    </div>
  )
}

export default Home