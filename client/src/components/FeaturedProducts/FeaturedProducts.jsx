import React from 'react'
import Card from '../Card/Card';
import './FeaturedProducts.scss';
const  FeaturedProducts = ({type}) => {
  
  const data =[{},{},{},{}];
    return (
    <div className='featuredProducts' >
        <div className="top">
            <h1>{type} product</h1>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas.
          </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item = {item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default  FeaturedProducts
