import React from 'react'

const Card = ({image, title, description}) => {
  return (
    <div className='mx-auto'>
        <div className="card h-[90%]" style={{width: "18rem"}}>
            <img src={image} className="card-img-top object-cover" style={{maxHeight: "50%"}}  alt="..." />
            <div className="card-body md:flex md:flex-col md:justify-evenly" style={{height: "50%"}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
   
    </div>
  )
}

export default Card