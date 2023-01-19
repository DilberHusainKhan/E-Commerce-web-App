import React from 'react'
import Card from '../Card/Card';
import './FeaturedProducts.scss';
const  FeaturedProducts = ({type}) => {
  
  const data =[{
    id:1,
    title:"Women",
    isNew:true,
    img:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
    img2:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
    oldPrice:20,
    price:15
},
  {
    id:2,
    title:"Men",
    img:"https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man?file=IronMan-EndgameProfile.jpg",
    img2:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
  oldPrice:20,
  price:15
},
{
    id:3,
    title:"Boy",
    img:"https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man?file=IronMan-EndgameProfile.jpg",
    img2:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
    oldPrice:20,
    price:15
},
{
    id:4,
    title:"Girl",
    img:"https://marvelcinematicuniverse.fandom.com/wiki/Iron_Man?file=IronMan-EndgameProfile.jpg",
    img2:"//images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg",
    oldPrice:20,
    price:15
}
];
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
