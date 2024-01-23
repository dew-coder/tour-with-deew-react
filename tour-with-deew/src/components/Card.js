import { useState } from 'react'
import './Card.css'

function Card({id,image,info,name,price, removetour}){
    
    const [readmore, setreadmore] = useState(false);
    const desc = `${info.substring(0,100)}...`
    function deschandler(){
        setreadmore(!readmore);
        
    }
    return(
        <div className='card-div'>
            <div className='imgg'>
                <img src={image} alt='img'></img>
            </div>
            <div className='price'>
                {price}
            </div>
            <div className='name'>
                {name}
            </div>
            <div>
                {readmore ? info : desc}
                <span onClick={deschandler} className='rdmore'>{readmore ? ` show less` : ` show more`}</span>
            </div>
            <div className='btn-div'>
                <button onClick={() => removetour(id)} >Not Interested</button>
            </div>
        </div>

    )
}

export default Card